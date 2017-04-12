var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/client');
var APP_DIR = path.resolve(__dirname, 'public/js/components');

var config = {
  entry: APP_DIR + '/container.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;