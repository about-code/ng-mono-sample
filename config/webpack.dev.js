var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
////////////////////////////////////////////////////////////////////////////////
const ENV = process.env.NODE_ENV = process.env.ENV = 'development';
////////////////////////////////////////////////////////////////////////////////
module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  entry: {
    'app': './src/app-jit.ts'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'ENV': JSON.stringify(ENV) }
    })
  ]
});
