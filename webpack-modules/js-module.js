module.exports = () => {
  return {
    test: /\.jsx*$/,
    exclude: [/node_modules/, /.+\.config.js/],
    loader: 'babel-loader',
  };
};
