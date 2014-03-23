module.exports = {
  foo: function () {
    return require('./a').foo();
  },
  bar: function () {
    return 'bar';
  }
};
