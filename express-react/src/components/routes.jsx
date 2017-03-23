/* @flow */
import React from 'react';
import { Route, Switch, matchPath } from 'react-router-dom';
import Root from './root';
import Doc from './doc';
import ezFlux from '../ez-flux';

type RouteData = {
  path: string,
  params: string[],
  query: Object,
};
type RouteConfig = {
  path: string,
  Component: Function,
  onRoute: (routeData: RouteData) => Promise<void> | void,
};

const routes: RouteConfig[] = [
  {
    path: '/doc',
    Component: Doc,
    onRoute: async (routeData) => {
      await ezFlux.actions.test.loadData(routeData);
    },
  },
  {
    path: '/',
    Component: Root,
    onRoute: () => {},
  },
];

const normalizeRequest = ({ path, query, params }: Object): RouteData => ({
  path,
  query,
  params: Object
    .keys(params)
    .map(key => params[key].substr(1)),
});

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

const getMatchingRoute = (path: string): RouteConfig =>
  routes.find((el) => {
    const match = (matchPath(path, el) || {});

    return match && match.isExact;
  }) || routes[1];

export const triggerOnRouteCallBack = (req: Object): Promise<void> | void =>
  getMatchingRoute(req.path)
    .onRoute(normalizeRequest(req));

export const RouteSwitcher = () => (
  <Switch>
    {routes.map(({ onRoute, Component, path }) => (
      <Route
        path={path}
        key={path}
        render={(props: any) => {
          const routeData = normalizeLocation(props.location);

          return <Component {...props} onRoute={() => onRoute(routeData)} />;
        }}
      />
    ))}
  </Switch>
);
