/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ezFlux from '../../state/ez-flux';
import RouteSwitcher from '../../components/route-switcher';

window.ezFlux = ezFlux;

ReactDOM.render(
  (
    <BrowserRouter>
      <RouteSwitcher />
    </BrowserRouter>
  ),
  document.getElementById('ez-app'),
);
