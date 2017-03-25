import EZFlux from 'ez-flux';
import testConfig from './state-config/test.state';

export default new EZFlux(
  {
    ...testConfig,
  },
  {
    initialState: (typeof window === 'object' && window.ezState) || {},
    throttleUpdates: true,
    debug: process.env.NODE_ENV === 'development' && process.title !== 'node',
  },
);
