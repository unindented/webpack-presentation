var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './entry',

  output: {
    path: 'output',
    filename: '[name]-[hash].js'
  },

  devServer: {
    contentBase: './output'
  },

  module: {
    loaders: [
      { test: /\.(gif|jpe?g|png)$/, loader: 'url?limit=10000' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less?strictMath') }
    ]
  },

  resolve: {
    extensions: ['', '.web.js', '.js', '.css', '.less']
  },

  plugins: [
    new ExtractTextPlugin('[name]-[contenthash].css', {disable: !process.env.EXTRACT})
  ]
};
