/* eslint-disable import/no-extraneous-dependencies */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssFocus = require('postcss-focus');
const cssnext = require('postcss-cssnext');
const autoprefixer = require('autoprefixer');
const postcssReporter = require('postcss-reporter');

module.exports = (prod) => {
  const dev = !prod;

  let use = [
    {
      loader: 'css-loader',
      options: {
        localIdentName: dev ? '[name]_[local]_[hash:base64:5]' : '[hash:base64]',
        modules: true,
        minimize: prod,
        sourceMap: dev,
        camelCase: true,
        importLoaders: 2,
      },
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: dev,
        plugins: () => [
          postcssFocus(),
          cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
          }),
          autoprefixer(),
          postcssReporter({
            clearMessages: true,
          }),
        ],
      },
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: dev,
      },
    },
  ];
  if (dev) {
    // In development mode, use style loader to enable hot module reloading
    use.unshift({
      loader: 'style-loader',
      options: {
        sourceMap: dev,
      },
    });
  } else {
    // In development mode, use ExtractTextPlugin
    use = ExtractTextPlugin.extract({
      use,
    });
  }

  return {
    test: /\.(s)*css$/,
    exclude: /node_modules/,
    use,
  };
};
