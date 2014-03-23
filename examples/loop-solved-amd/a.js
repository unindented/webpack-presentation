define(function () {
  return {
    foo: function () {
      return 'foo';
    },
    bar: function () {
      return require('./b').bar();
    }
  };
});
