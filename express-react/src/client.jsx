/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';

ReactDOM.render(
  (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ),
  document.getElementById('ez-app'),
);
