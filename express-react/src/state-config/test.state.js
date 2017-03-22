/* eslint-disable consistent-return */
const timeout = ms => new Promise(res => setTimeout(res, ms));

export default {
  test: {
    values: {
      dataLoaded: false,
      hello: 'hi.',
    },
    actions: {
      loadData: async (payload, ezFlux): Object | void => {
        if (ezFlux.state.test.dataLoaded) return;
        await timeout(1000);
        return { dataLoaded: true, hello: 'Hello World!' };
      },
    },
  },
};
