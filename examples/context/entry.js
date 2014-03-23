var req = require.context('./lib', true, /^\.\/.*\.js$/);
var libs = req.keys();
var lib = libs[Math.floor(Math.random() * libs.length)];
console.log(req(lib).foo());
