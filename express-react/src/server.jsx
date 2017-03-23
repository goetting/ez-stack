/* @flow */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import * as routes from './components/routes';
import ezFlux from './ez-flux';

const cacheTTL = 1e3 * 60 * 60
const port = 1337;

const sendIndex = ({ ezState, App }, res) => res.send(
  `<!doctype html>
  <html lang="en">
    <head>
      <title>EZ-APP</title>
      <script type="text/javascript">window.ezState = ${JSON.stringify(ezState)};</script>
    </head>
    <body>
      <div id="ez-app">${App}</div>
      <script type="text/javascript" src="static/client.js"></script>
    </body>
  </html>`
);
const app = express();
const router = express.Router();
const cache = {
  items: [],
  setTTL: ms => setTimeout(() => cache.items = [], ms),
  getKey: ({ originalUrl, method }) => `${method}${originalUrl}`,
  set: (req, ezState, App) => cache.items[cache.getKey(req)] = { ezState, App },
  get: req => cache.items[cache.getKey(req)],
  middleWare: (req, res, next) => {
    const cached = cache.get(req);

    if (cached) sendIndex(cached, res);
    else next();
  }
};

cache.setTTL(cacheTTL);

router.get('/favicon.ico', (req, res) => res.status(404).end());
router.get('*', cache.middleWare);
router.get('*', async (req, res) => {
  try {
    await routes.triggerOnRouteCallBack(req);
  } catch (error) {
    res.status(500).end();
    throw error;
  }
  const context = {};
  const ezState = ezFlux.state;
  const App = renderToString(
    <StaticRouter location={req.url} context={context}>
      <routes.RouteSwitcher />
    </StaticRouter>,
  );
console.log(ezState);
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    sendIndex({ ezState, App }, res);
    cache.set(req, ezState, App);
  }
});

app.use('/static', express.static(`${__dirname}/static`));
app.use(router);
app.listen(port, () => console.log(`EZ App listening on ${port}`));                                   // eslint-disable-line no-console

