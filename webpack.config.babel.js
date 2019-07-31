const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sassModule = require('./webpack-modules/sass-module');
const imgModule = require('./webpack-modules/img-module');

const env = process.env.NODE_ENV;
const prod = env === 'production';

const rules = [
  sassModule,
  imgModule,
].map(module => module(prod));

module.exports = {
  output: {
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules'),
    ],
  },
  module: {
    rules,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
  ],
};
