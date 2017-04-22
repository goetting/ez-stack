const path = require('path');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

const distPath = `${__dirname}/app`;
const extensions = { extensions: ['.js', '.jsx', '.json'] };
const browserConfig = {
  name: 'browser',
  entry: [
    'babel-polyfill',
    './src/app-entry-points/client/client.jsx'
  ],
  output: {
    path: `${distPath}/static`,
    filename: 'ezbundle.js',
    publicPath: '/static'
  },
  devtool: 'source-map',
  resolve: extensions,
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
};

const sassConfig = {
  name: 'css',
  entry: './src/components/entry.sass',
  output: {
    path: `${distPath}/static`,
    filename: 'style.js',
    publicPath: '/static',
  },
  module: {
    rules: [
      {
        test: /.sass$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'ezbundle.css', allChunks: true }),
  ],
};


module.exports = [browserConfig, sassConfig];
