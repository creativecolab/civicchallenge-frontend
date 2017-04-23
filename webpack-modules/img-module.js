module.exports = (prod) => {
  return {
    test: /\.(jpe?g|gif|png|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 10000,
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          gifsicle: {
            optimizationLevel: prod ? 3 : 1,
          },
          mozjpeg: {
            dcScanOpt: prod ? 2 : 1,
          },
          optipng: {
            optimizationLevel: prod ? 7 : 3,
          },
          svgo: {
            options: {},
          },
          pngquant: {
            quality: '65-90',
            speed: 4,
          },
        },
      },
    ],
  };
};
