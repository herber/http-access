const test = require('./app.js');

test('https://not-a-real-domain-i-guess.com').then(function() {
  console.log('Something else');
  console.log('ok');
}).catch(function() {
  console.log('Something else');
	console.log('no');
})


test('https://google.com').then(function() {
  console.log('Google');
  console.log('ok');
}).catch(function() {
  console.log('Google');
	console.log('no');
})
