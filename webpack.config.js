const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    app: ['es6-promise', 'whatwg-fetch', './app.js'],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!',
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  devtool: null,

  plugins: NODE_ENV === 'development' ? [
    new webpack.NoErrorsPlugin(),
  ] : [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new ExtractTextPlugin('css/[name][hash].css'),
    new HtmlWebpackPlugin({
      title: 'ReactJS Routing',
      filename: '../index.html',
      hash: true,
    }),
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
  ],
  devServer: {},
};
