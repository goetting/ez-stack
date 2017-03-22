/* @flow */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import * as routes from './components/routes';
import ezFlux from './ez-flux';

const app = express();
const expressRouter = express.Router();
const port = 1337;

expressRouter.get('/favicon.ico', (req, res) => res.status(404).end());
expressRouter.get('*', async (req, res) => {
  try {
    await routes.triggerOnRouteCallBack(req);
  } catch (error) {
    res.status(500).end();
    throw error;
  }
  const context = {};
  const App = renderToString(
    <StaticRouter location={req.url} context={context}>
      <routes.RouteSwitcher />
    </StaticRouter>,
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    res.send(
      `<!doctype html>
      <html lang="en">
        <head>
          <title>EZ-APP</title>
          <script type="text/javascript">window.ezState = ${JSON.stringify(ezFlux.state)};</script>
        </head>
        <body>
          <div id="ez-app">${App}</div>
          <script type="text/javascript" src="static/client.js"></script>
        </body>
      </html>`,
    );
  }
});

app.use('/static', express.static(`${__dirname}/static`));
app.use(expressRouter);
app.listen(port, () => console.log(`EZ App listening on ${port}`));                                   // eslint-disable-line no-console
