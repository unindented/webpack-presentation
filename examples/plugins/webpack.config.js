var webpack = require('webpack');
var DefinePlugin = webpack.DefinePlugin;
var I18nPlugin = require('i18n-webpack-plugin');

var langs = {
  en: require('./languages/en.json'),
  es: require('./languages/es.json')
};

module.exports = Object.keys(langs).map(function (lang) {
  return {
    entry: './entry',

    output: {
      path: 'output',
      filename: 'bundle-' + lang + '.js'
    },

    plugins: [
      new DefinePlugin({
        DEBUG: !!process.env.DEBUG,
        LANGUAGE: '"' + lang + '"'
      }),
      new I18nPlugin(langs[lang])
    ]
  };
});
