var a = require('./a');

module.exports = {
  foo: function () {
    return a.foo();
  },
  bar: function () {
    return 'bar';
  }
};
