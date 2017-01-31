const test = require('./app.js');

test('https://google.com').then(function() {
  console.log('ok');
}).catch(function() {
	console.log('no');
})
