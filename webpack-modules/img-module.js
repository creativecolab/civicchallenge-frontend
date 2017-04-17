module.exports = () => {
  return {
    test: /\.(jpe?g|gif|png|svg)$/i,
    loader: 'file-loader',
    options: {
      limit: 10000,
    },
  };
};
