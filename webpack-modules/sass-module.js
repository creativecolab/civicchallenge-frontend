/* eslint-disable import/no-extraneous-dependencies */

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const isDev = process.env.NODE_ENV === 'development';

const cssLoaderIdentName = isDev ? '[name]_[local]_[hash:base64:5]' : '[hash:base64]';

module.exports = {
  test: /\.(s)*css$/,
  exclude: /node_modules/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: isDev,
    },
  }, {
    loader: 'css-loader',
    options: {
      localIdentName: cssLoaderIdentName,
      modules: true,
      sourceMap: isDev,
      camelCase: true,
      importLoaders: 2,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: isDev,
      plugins: () => [
        postcssFocus(),
        cssnext({
          browsers: ['last 2 versions', 'IE > 10'],
        }),
        postcssReporter({
          clearMessages: true,
        }),
      ],
    },
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: isDev,
    },
  }],
};
