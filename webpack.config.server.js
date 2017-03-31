const path = require('path');

const ExternalsPlugin = require('./webpack-modules/webpack-externals-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'server/server.jsx'),

  output: {
    path: path.join(__dirname, 'server-dist'),
    filename: 'server.bundle.js',
  },

  target: 'node',

  node: {
    __filename: true,
    __dirname: true,
  },

  resolve: {
    extensions: ['.json', '.node', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            [
              'babel-plugin-webpack-loaders', {
                config: './webpack.config.babel.js',
                verbose: false,
              },
            ],
          ],
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/'),
    }),
  ],
};
