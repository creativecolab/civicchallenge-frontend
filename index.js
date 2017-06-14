/**
 * Entry Script
 */

if (['staging', 'production'].includes(process.env.NODE_ENV)) {
  process.env.webpackAssets = JSON.stringify(require('./client-dist/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('./client-dist/chunk-manifest.json'));

  require('./server-dist/server.bundle.js');
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
