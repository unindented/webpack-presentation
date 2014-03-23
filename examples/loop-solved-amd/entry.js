require(['./a', './b'], function (a, b) {
  console.log(a.foo(), a.bar());
  console.log(b.foo(), b.bar());
});
