import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import RouteSwitcher from '../../../components/route-switcher';
import ezFlux from '../../../state/ez-flux';
import cache from './cache';

const fillIndexTemplate = (ezState, reactMarkup) =>
`<!doctype html>
<html lang="en">
  <head>
    <title>EZ-APP</title>
    <link rel="stylesheet" href="/static/ezbundle.css">
    <link rel="stylesheet" href="https://style-6a38.kxcdn.com/1.4.0/lib/ricardo.min.css">
    <script type="text/javascript">window.ezState = ${JSON.stringify(ezState)};</script>
  </head>
  <body>
    <div id="ez-app">${reactMarkup}</div>
    <script type="text/javascript" src="static/ezbundle.js"></script>
  </body>
</html>`;

export default function renderAndsendMarkup(req, res) {
  const context = {};
  const reactMarkup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <RouteSwitcher />
    </StaticRouter>,
  );

  if (context.url) {
    res.redirect(301, context.url);
  } else {
    const appMarkup = fillIndexTemplate(ezFlux.state, reactMarkup);

    res.send(appMarkup);
    cache.set(req, appMarkup);
  }
  ezFlux.resetState();
}
