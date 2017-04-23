import ezFlux from './state/ez-flux';
import SearchResuls from './components/search-results/search-results';

export type RouteData = {
  path: string,
  params: string[],
  query: Object,
};
export type RouteConfig = {
  path: string,
  Component: Function,
  onRoute: (routeData: RouteData) => Promise<void> | void,
};

const onSearchResults = async routeData =>
  await ezFlux.actions.products.callAPI(routeData.query.search);

const routes: RouteConfig[] = [
  {
    path: '/',
    Component: SearchResuls,
    onRoute: onSearchResults,
  },
  {
    path: '/search',
    Component: SearchResuls,
    onRoute: onSearchResults,
  },
];

export default routes;
