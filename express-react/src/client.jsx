/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RouteSwitcher } from './components/routes';

ReactDOM.render(
  (
    <BrowserRouter>
      <RouteSwitcher />
    </BrowserRouter>
  ),
  document.getElementById('ez-app'),
);
