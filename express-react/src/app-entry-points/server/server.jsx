/* @flow */
import babelPolyfill from 'babel-polyfill';                                                           // eslint-disable-line no-unused-vars
import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cache from './lib/cache';
import setEZState from './lib/set-ez-state';
import renderAndsendMarkup from './lib/markup';

const port = 3333;
const app = express();
const router = express.Router();
const rootDir = __dirname.split('/app-entry-points')[0];

cache.setTTL(1e3 * 60 * 60);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(compression())
  .use('/static', express.static(`${rootDir}/static`))
  .use(router)
  .listen(port, () => console.log(`App listening on :${port}`));                                      // eslint-disable-line no-console

router
  .get('/favicon.ico', (req, res) => res.status(404).end())
  .get('*', cache.checkRoute)
  .get('*', setEZState)
  .get('*', renderAndsendMarkup);
