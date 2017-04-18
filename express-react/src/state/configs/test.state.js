/* eslint-disable consistent-return */
const timeout = ms => new Promise(res => setTimeout(res, ms));

export default {
  values: {
    dataLoaded: false,
    hello: 'hi.',
  },
  actions: {
    loadData: async (payload, { dataLoaded }): Object | void => {
      if (dataLoaded) return false;
      await timeout(1000);
      return { dataLoaded: true, hello: 'Hello World!' };
    },
  },
};
