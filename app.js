var request = require('request');

module.exports = function (url) {
  let rv = new Promise(function(resolve, reject) {
    request(url, function (error, response, body) {
      if (!error) {
        resolve('Success!');
      } else {
        reject('Failure!');
      }
    })
  });

  return rv;
}
