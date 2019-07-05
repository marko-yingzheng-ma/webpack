const path = require('path');
/**
 *    Module        |   Purpose
 *  ----------------|---------------
 *  babel-loader    |   Teaches babel how to work with webpack
 *  babel-core      |   Knows how to take in code, parse it, and generate some output files
 *  babel-preset-env|   Ruleset for telling babel exactly what pieces of ES6/7/8 syntax to look for, and how to turn it into ES5 code
 * 
 *  css-loader      |   Knows how to deal with CSS imports (open the file and read the content).
 *  style-loader    |   Takes the CSS imports (content) and adds them to the HTML document under <style> tag.
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
      }, 
      {
        use: ['style-loader', 'css-loader'], // order matters, interprets from RIGHT to LEFT
        test: /\.css$/
      }
    ]
  }
};

module.exports = config