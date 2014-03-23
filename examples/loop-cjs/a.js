var b = require('./b');

module.exports = {
  foo: function () {
    return 'foo';
  },
  bar: function () {
    return b.bar();
  }
};
