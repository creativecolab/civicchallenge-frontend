const path = require('path');

const webpack = require('webpack');
const ExternalsPlugin = require('./webpack-modules/webpack-externals-plugin');

module.exports = {
  entry: {
    server: [
      'babel-polyfill',
      './server/server.jsx',
    ],
  },

  output: {
    path: path.join(__dirname, 'server-dist'),
    filename: 'server.bundle.js',
    chunkFilename: 'server.[name].[id].js',
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
        options: {
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.browser': JSON.stringify(false),
    }),
    new ExternalsPlugin({
      type: 'commonjs',
      include: path.join(__dirname, './node_modules/'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: true,
      comments: false,
    }),
  ],
};
