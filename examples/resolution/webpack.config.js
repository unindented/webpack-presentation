module.exports = {
  entry: './entry',

  output: {
    path: 'output',
    filename: 'bundle.js'
  },

  resolve: {
    modulesDirectories: [
      'utils',
      'web_modules',
      'node_modules'
    ]
  }
};
