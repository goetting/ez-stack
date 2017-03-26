import ezFlux from './state/ez-flux';
import Root from './components/root';
import Doc from './components/doc';

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

const routes: RouteConfig[] = [
  {
    path: '/doc',
    Component: Doc,
    onRoute: async (routeData) => {
      await ezFlux.actions.test.loadData(routeData);
    },
  },
  {
    path: '/',
    Component: Root,
    onRoute: () => {},
  },
];

export default routes;
