/* @flow */
import { matchPath } from 'react-router-dom';
import routes from './routes-config';

export default (url: string): Object =>
  (routes.find(el => matchPath(url, el).isExact) || routes[0])
    .loadData()
    // do all the ez-things here
    .then(data => data || {});
