require('./foo');
require('./bar');
var greeter = require('./greeter');
var el = document.createElement('div');
var text = document.createTextNode(greeter.greet('John'));
el.appendChild(text);
document.body.appendChild(el);
