// const isDev = process.env.NODE_ENV === 'development';

module.exports = () => {
  return {
    test: /\.(jpe?g|gif|png|svg)$/i,
    loader: 'url-loader',
    options: {
      limit: 10000,
    },
  };
};
