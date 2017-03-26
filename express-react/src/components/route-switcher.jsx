/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import type { RouteData } from '../routes';

const normalizeLocation = ({ pathname, search }: Object): RouteData => ({
  path: pathname,
  params: pathname
    .split('/')
    .filter(el => el !== ''),
  query: search
    .substr(1)
    .split('&')
    .filter(el => el !== '')
    .reduce((qry, el) => {
      const [key, val] = el.split('=');

      qry[key] = val;
      return qry;
    }, {}),
});

const RouteSwitcher = () => (
  <Switch>
    {routes.map(({ onRoute: onRouteCB, Component, path }) => (
      <Route
        path={path}
        key={path}
        render={(props: any) => {
          const routeData = normalizeLocation(props.location);

          return <Component {...props} onRoute={() => onRouteCB(routeData)} />;
        }}
      />
    ))}
  </Switch>
);

export default RouteSwitcher;
