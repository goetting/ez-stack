const path = require('path');

const distPath = `${__dirname}/app`;
const extensions = { extensions: ['.js', '.jsx', '.json'] };
const moduleLoaders = {
  loaders: [{
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }]
};

module.exports = [
  {
    name: 'browser',
    entry: [
      'babel-polyfill',
      './src/client.jsx'
    ],
    output: {
      path: `${distPath}/static`,
      filename: 'client.js',
      publicPath: '/static'
    },
    devtool: 'source-map',
    resolve: extensions,
    module: moduleLoaders
  }, {
    name: 'server',
    externals: /^[a-z\-0-9]+$/,
    entry: [
      'babel-polyfill',
      './src/server.jsx',
    ],
    target: 'node',
    node: { __dirname: false, __filename: false },
    devtool: false,
    resolve: extensions,
    output: {
      path: distPath,
      filename: 'server.js',
      libraryTarget: 'commonjs2'
    },
    module: moduleLoaders
  }
];
