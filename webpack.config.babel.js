const path = require('path');

const sassModule = require('./webpack-modules/sass-module');
const imgModule = require('./webpack-modules/img-module');

function resolve(dir) {
  return path.join(__dirname, dir);
}

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
    rules: [
      sassModule,
      imgModule,
    ],
  },
};
