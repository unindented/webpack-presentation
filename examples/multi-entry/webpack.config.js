var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    entry1: './entry1',
    entry2: './entry2'
  },

  output: {
    path: 'output',
    filename: 'bundle-[name].js'
  },

  plugins: [
    new CommonsChunkPlugin('common', 'bundle-[name].js')
  ]
};
