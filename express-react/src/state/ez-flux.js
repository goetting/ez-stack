import EZFlux from 'ez-flux';
import ezReact from 'ez-react';
import test from './configs/test.state';
import todo from './configs/todo.state';

const isDev = process.env.NODE_ENV === 'development';
const isNode = process.title === 'node';
const options = {
  initialState: isNode ? {} : window.ezState,
  plugins: [ezReact],
};

if (isDev) {
  options.onFluxEmit = name => console.log(name);                                                     // eslint-disable-line no-console
}

export default new EZFlux({ test, todo }, options);
