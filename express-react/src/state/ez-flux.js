import EZFlux from 'ez-flux';
import testConfig from './configs/test.state';

const isDevelopment = process.env.NODE_ENV === 'development';
const isNode = process.title === 'node';
const initialState = isNode || typeof window === 'undefined' ? {} : window.ezState;

export default new EZFlux(
  {
    ...testConfig,
  },
  {
    initialState,
    throttleUpdates: !isNode,
    log: { events: isDevelopment },
  },
);
