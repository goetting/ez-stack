/* @flow */
import Root from './components/root';
import Doc from './components/doc';

export default [
  {
    key: 'doc',
    path: '/doc',
    component: Doc,
    loadData: () => new Promise(res => res()),
  },
  {
    key: 'root',
    path: '/',
    component: Root,
    loadData: () => new Promise(res => res()),
  },
];
