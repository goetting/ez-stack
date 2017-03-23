/* @flow */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import sendIndex from './server-libs/index-responder';
import cache from './server-libs/cache';
import * as routes from './components/routes';
import ezFlux from './ez-flux';

const port = 1337;
const app = express();
const router = express.Router();

cache.setTTL(1e3 * 60 * 60);

app
  .use('/static', express.static(`${__dirname}/static`))
  .use(router)
  .listen(port, () => console.log(`EZ App listening on ${port}`));                                   // eslint-disable-line no-console

router
  .get('/favicon.ico', (req, res) => res.status(404).end())
  .get('*', cache.middleWare)
  .get('*', async (req, res) => {
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

    if (context.url) {
      res.redirect(301, context.url);
    } else {
      sendIndex({ ezState, App }, res);
      cache.set(req, ezState, App);
    }
  });

