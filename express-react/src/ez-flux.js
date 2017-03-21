import EZFlux from 'ez-flux';

const timeout = ms => new Promise(res => setTimeout(res, ms));

export default new EZFlux(
  {
    test: {
      values: {
        dataLoaded: false,
        hello: 'hi.',
      },
      actions: {
        loadData: async () => {
          await timeout(1000);
          return { dataLoaded: true, hello: 'Hello World!' };
        },
      },
    },
  },
  { initialState: (typeof window === 'object' && window.ezState) || {} },
);
