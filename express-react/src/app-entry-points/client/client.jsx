/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import product from '../../stores/product';
import RouteSwitcher from '../../components/route-switcher';

window.stores = { product };

ReactDOM.render(
  (
    <BrowserRouter>
      <RouteSwitcher />
    </BrowserRouter>
  ),
  document.getElementById('ez-app'),
);
