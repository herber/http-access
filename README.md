# Http access
> Check if a hostname can be accessed

## Installation
```bash
npm install --save http-access
```

## Usage
```javascript
const test = require('http-access');

test('https://google.com').then(function() {
  console.log('ok');
}).catch(function() {
	console.log('no');
})

```

> Working example in [test.js](https://github.com/tobihrbr/http-access/blob/master/test.js)

## License
MIT
