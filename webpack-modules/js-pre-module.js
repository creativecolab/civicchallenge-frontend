/* eslint-disable import/no-extraneous-dependencies */

const EslintFriendlyFormatter = require('eslint-friendly-formatter');

module.exports = () => {
  return {
    test: /\.jsx*$/,
    exclude: [/node_modules/, /.+\.config.js/],
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
      formatter: EslintFriendlyFormatter,
    },
  };
};
