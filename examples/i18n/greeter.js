var t = require('./translator');

module.exports = {
  greet: function (name) {
    return t(__('greeting'), {name: name});
  }
};
