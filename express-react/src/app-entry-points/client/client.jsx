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

console.log('lol :(')

const context = require.context('./', false, /\.jsx?$/); //filesToLoad is a directory with .js files
const modules = {};
const customReloadLogic = (name, module, isReload) =>
  console.log(`module ${name} ${isReload ? 're' : ''}loaded`);

context
  .keys()
  .forEach((key) => {
    let module = context(key);

    modules[key] = module;
    customReloadLogic(key, module, false);
  });

if (module.hot) {
  module.hot.accept(context.id, () =>{
    const reloadedContext = require.context("./", false, /\.js$/);

    reloadedContext
      .keys()
      .map(key => [key, reloadedContext(key)])
      .filter(reloadedModule => modules[reloadedModule[0]] !== reloadedModule[1]) // changed modules
      .forEach((module) => {
        modules[module[0]] = module[1];
        customReloadLogic(module[0], module[1], true);
      })
  });
}