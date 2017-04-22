import EZFlux from 'ez-flux';
import testConfig from './configs/test.state';

const isDev = process.env.NODE_ENV === 'development';
const isNode = process.title === 'node';
const options = { initialState: isNode ? {} : window.ezState };

if (isDev) {
  options.onFluxEmit = name => console.log(name);                                                     // eslint-disable-line no-console
}

export default new EZFlux({ test: testConfig }, options);
