define(['./b'], function (b) {
  return {
    foo: function () {
      return 'foo';
    },
    bar: function () {
      return b.bar();
    }
  };
});
