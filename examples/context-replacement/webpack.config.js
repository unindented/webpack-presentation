var webpack = require('webpack');
var ContextReplacementPlugin = webpack.ContextReplacementPlugin;

module.exports = {
  entry: './entry',

  output: {
    path: 'output',
    filename: 'bundle.js'
  },

  plugins: [
    new ContextReplacementPlugin(
      /moment[\\\/]locale$/,
      new RegExp('^\\./en$')
    )
  ]
};
