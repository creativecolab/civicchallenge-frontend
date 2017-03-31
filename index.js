/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'production') {
  console.log(1);
} else {
  require('babel-register')({
    plugins: [
      [
        'babel-plugin-webpack-loaders',
        {
          config: './webpack.config.babel.js',
          verbose: false
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/server');
}
