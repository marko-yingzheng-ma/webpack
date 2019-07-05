const path = require('path');
/**
 *    Module        |   Purpose
 *  ----------------|---------------
 *  babel-loader    |   Teaches babel how to work with webpack
 *  babel-core      |   Knows how to take in code, parse it, and generate some output files
 *  babel-preset-env|   Ruleset for telling babel exactly what pieces of ES6/7/8 syntax to look for, and how to turn it into ES5 code
 */
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // do preprocessing before webpack do the work linking source code into bundle.js
        use: 'babel-loader',
        test: /\.js$/ //only process .js files
      }
    ]
  }
};

module.exports = config