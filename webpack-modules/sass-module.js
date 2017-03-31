/* eslint-disable import/no-extraneous-dependencies */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = (prod) => {
  const dev = !prod;

  return {
    test: /\.(s)*css$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      use: [{
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
      }],
    }),
  };
};
