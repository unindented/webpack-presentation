define(['./a'], function (a) {
  return {
    foo: function () {
      return a.foo();
    },
    bar: function () {
      return 'bar';
    }
  };
});
