module.exports = () => {
  return {
    test: /\.(jpe?g|gif|png|svg)$/i,
    loader: 'url-loader',
    options: {
      limit: 10000,
    },
  };
};
