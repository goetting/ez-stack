/* @flow */
import babelPolyfill from 'babel-polyfill';                                                           // eslint-disable-line no-unused-vars
import express from 'express';
import cache from './middleware/cache';
import setEZState from './middleware/set-ez-state';
import renderAndsendMarkup from './middleware/markup';

const port = 1337;
const app = express();
const router = express.Router();
const rootDir = __dirname.split('/app-entry-points')[0];

cache.setTTL(1e3 * 60 * 60);

app
  .use('/static', express.static(`${rootDir}/static`))
  .use(router)
  .listen(port, () => console.log(`EZ App listening on ${port}`));                                    // eslint-disable-line no-console

router
  .get('/favicon.ico', (req, res) => res.status(404).end())
  .get('*', cache.checkRoute)
  .get('*', setEZState)
  .get('*', renderAndsendMarkup);

