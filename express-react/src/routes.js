import productStore from './stores/product';
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

const onSearchResults = routeData => productStore.callAPI(routeData.query.search);

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
