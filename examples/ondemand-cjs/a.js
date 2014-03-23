module.exports = {
  foo: function (callback) {
    callback('foo');
  },
  bar: function (callback) {
    require.ensure(['./b'], function (require) {
      require('./b').bar(callback);
    });
  }
};
