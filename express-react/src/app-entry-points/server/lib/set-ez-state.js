import { matchPath } from 'react-router-dom';
import routes from '../../../routes';

export default async function setEZState({ path, query, params }, res, next) {
  const matchingAppRoute = routes.find(el => (matchPath(path, el) || {}).isExact) || routes[1];
  const normalizedRouteData = {
    path,
    query,
    params: Object
      .keys(params)
      .map(key => params[key].substr(1)),
  };

  try {
    await matchingAppRoute.onRoute(normalizedRouteData);
  } catch (error) {
    res.status(500).end();
    console.error(error);                                                                             // eslint-disable-line no-console
  }

  next();
}
