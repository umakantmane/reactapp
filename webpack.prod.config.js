// In webpack.prod.config.js
// This file contains the configuration needed by Webpack to compile the sources to bundle.js

const webpack = require('webpack');

// The path module provides utilities for working with file
//  and directory paths. It can be accessed using:
// See: https://nodejs.org/docs/latest/api/path.html
const path = require('path');

/*module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './main.js' // this file along with dependency libs will be compiled into one file and loaded
      // See index.html, you will see bundle.js embedded
  ],

  // Production details
  output: {
    // When compiled for production, output file location
    path: '/',
    publicPath: '/',
    filename: 'index.js' // Its convention to use this name
  },

  // Bundle lookup dir for included/imported modules
  // By default, bundler/webpack with search here for the scripts
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      },
        // I am using SASS as Transpiler for style sheets
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},

    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // This tells the Webpack and Babel for optimization for performance
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(), // Makes sure Webpack will not compile if Errors
  ]
};*/


var PORT =  process.env.PORT || 8083;
var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      historyApiFallback:true,
      port: PORT
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // This tells the Webpack and Babel for optimization for performance
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin(), // Makes sure Webpack will not compile if Errors
  ]
}
module.exports = config;