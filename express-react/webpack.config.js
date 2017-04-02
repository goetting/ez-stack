const path = require('path');
const webpack = require('webpack');
const distPath = `${__dirname}/app`;
const extensions = { extensions: ['.js', '.jsx', '.json'] };
const moduleLoaders = {
  loaders: [{
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  }]
};

module.exports = {
  name: 'browser',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/app-entry-points/client/client.jsx',
  ],
  output: {
    path: `${distPath}/static`,
    filename: 'client.js',
    publicPath: '/static'
  },
  devtool: 'source-map',
  resolve: extensions,
  module: moduleLoaders,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
