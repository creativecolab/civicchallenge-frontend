const path = require('path');

const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sassModule = require('./webpack-modules/sass-module');
const imgModule = require('./webpack-modules/img-module');
const jsPreModule = require('./webpack-modules/js-pre-module');
const jsModule = require('./webpack-modules/js-module');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client?timeout=2000&reload=true&noInfo=true',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.jsx',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules'),
    ],
  },

  module: {
    rules: [
      sassModule,
      jsPreModule,
      jsModule,
      imgModule,
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-report/bundle-report.html',
      openAnalyzer: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin({
      clearConsole: true,
    }),
  ],
};
