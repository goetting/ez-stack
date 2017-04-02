import chokidar from 'chokidar';
import webpack from 'webpack';
import config from '../../../../webpack.config';
//import cssModulesRequireHook from 'css-modules-require-hook';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const rootDir = __dirname.split('/app-entry-points')[0];
const compiler = webpack(config);
const watcher = chokidar.watch(rootDir);
const devMiddleWareOptions = { noInfo: true, publicPath: config.output.publicPath };
export const webpackDev = () => webpackDevMiddleware(compiler, devMiddleWareOptions);
export const webpackHotReload = () => webpackHotMiddleware(compiler);
const cleanCache = () => {
  console.log("Clearing module cache from server");
  Object
    .keys(require.cache)
    .forEach((file) => {
      if (!/node_modules/.test(file)) delete require.cache[id];
    });
}

//watcher.on('ready', () => watcher.on('all', cleanCache));
//compiler.plugin('done', cleanCache);
compiler.plugin('compile', (...args) => console.log('Started: Webpack'));
compiler.plugin('done', (...args) => console.log('Finished: Webpack'));