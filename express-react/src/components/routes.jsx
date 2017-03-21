/* @flow */
import React from 'react';
import { Route, Switch, matchPath } from 'react-router-dom';
import Root from './root';
import Doc from './doc';
import ezFlux from '../ez-flux';

const routes = [
  {
    key: 'doc',
    path: '/doc',
    Component: Doc,
    loadData: async (): Promise<void> => {
      if (!ezFlux.state.test.dataLoaded) await ezFlux.actions.test.loadData();
    },
  },
  {
    key: 'root',
    path: '/',
    Component: Root,
    loadData: async (): Promise<void> => {},
  },
];

export function setStateByRoute(url: string): Promise<void> {
  const route = routes.find(el => matchPath(url, el).isExact) || routes[1];

  return route.loadData();
}

export const Routes = () => (
  <Switch>
    {routes.map(({ loadData, Component, key, path }) => {
      const render = props => <Component {...props} loadData={loadData} />;

      return <Route {...{ render, key, path }} />;
    })}
  </Switch>
);
