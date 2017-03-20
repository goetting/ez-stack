/* @flow */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes-config';
const mappedRoutes = routes.map(route => <Route {...route} />);
console.log(mappedRoutes[0].props, mappedRoutes[1].props)
export default function Routes() {
  return (
    <Switch>
      {mappedRoutes}
    </Switch>
  );
}
