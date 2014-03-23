require(['./a'], function (a) {
  var p = function () {
    console.log(arguments);
  };

  a.foo(p);
  a.bar(p);
});
