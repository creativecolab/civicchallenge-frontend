const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sassModule = require('./webpack-modules/sass-module');
const imgModule = require('./webpack-modules/img-module');
const jsPreModule = require('./webpack-modules/js-pre-module');
const jsModule = require('./webpack-modules/js-module');
const jsonModule = require('./webpack-modules/json-module');

const env = process.env.NODE_ENV;
const prod = env === 'production';

const rules = [
  sassModule,
  imgModule,
  jsPreModule,
  jsModule,
  jsonModule,
].map(module => module(prod));

module.exports = {
  entry: {
    app: [
      './client/index.jsx',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: path.join(__dirname, 'client-dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules'),
    ],
  },

  module: {
    rules,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.[chunkhash].js',
    }),
    new ExtractTextPlugin({
      filename: 'app.[chunkhash].css',
      allChunks: true,
    }),
    new ManifestPlugin({
      basePath: '/',
    }),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      beautify: false,
      comments: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../bundle-report/bundle-report.html',
      openAnalyzer: true,
    }),
  ],
};
