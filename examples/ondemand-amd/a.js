define(function () {
  return {
    foo: function (callback) {
      callback('foo');
    },
    bar: function (callback) {
      require(['./b'], function (require) {
        require('./b').bar(callback);
      });
    }
  };
});
