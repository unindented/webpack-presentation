define(function () {
  return {
    foo: function () {
      return require('./a').foo();
    },
    bar: function () {
      return 'bar';
    }
  };
});
