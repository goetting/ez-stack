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
  key: string,
  path: string,
  Component: Function,
  loadData: (routeData: RouteData, viewData?: any) => Promise<void>,
};

function normalizeRouteData(data: Object, source: string): RouteData {
  const { search, pathname } = data;
  let { query, path, params } = data;

  switch (source) {
    case 'express':
      params = Object
        .keys(params)
        .map(key => params[key].substr(1));
      break;
    case 'react':
      path = pathname;
      params = path
        .split('/')
        .filter(el => !!el);
      query = search
        .substr(1)
        .split('&')
        .filter(el => !!el)
        .reduce((qry, el) => {
          const [key, val] = el.split('=');

          qry[key] = val;
          return qry;
        }, {});
      break;
    default:
  }
  return { path, params, query };
}

const routes: RouteConfig[] = [
  {
    key: 'doc',
    path: '/doc',
    Component: Doc,
    loadData: async (routeData) => {
      await ezFlux.actions.test.loadData(routeData);
    },
  },
  {
    key: 'root',
    path: '/',
    Component: Root,
    loadData: async () => {},
  },
];

export function setStateByRoute(req: Object): Promise<void> {
  const route = routes.find((el) => {
    const match = matchPath(req.path, el);

    return match && match.isExact;
  }) || routes[1];

  return route.loadData(normalizeRouteData(req, 'express'));
}

export const Routes = () => (
  <Switch>
    {routes.map(({ loadData, Component, key, path }) => {
      const render = (props: any) => {
        const routeData = normalizeRouteData(props.location, 'react');

        return <Component {...props} loadData={viewData => loadData(routeData, viewData)} />;
      };
      return <Route {...{ render, key, path }} />;
    })}
  </Switch>
);
