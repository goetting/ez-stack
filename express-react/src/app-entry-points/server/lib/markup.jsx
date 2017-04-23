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
    <link rel="apple-touch-icon-precomposed" sizes="180x180" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/apple-touch-icon-180x180-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/apple-touch-icon-152x152-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/apple-touch-icon-120x120-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/apple-touch-icon-precomposed.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/favicon-16x16.png">
    <link rel="manifest" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/manifest.json">
    <link rel="mask-icon" color="#5bbad5" href="https://style-6a38.kxcdn.com/1.4.0/lib/images/safari-pinned-tab.svg">

    <link rel="stylesheet" href="/static/ezbundle.css">

    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500" type="text/css">

    <link rel="stylesheet" href="https://style-6a38.kxcdn.com/1.4.0/lib/ricardo.min.css" type="text/css">
    <link rel="stylesheet" href="https://style-6a38.kxcdn.com/1.4.0/assets/styles/main.css" type="text/css">

    <script src="https://style-6a38.kxcdn.com/1.4.0/lib/ricardo.min.js"></script>
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
