var url = require('url');

var parsedURL = url.parse('https://www.backtothefuture.com/profile?name=jake');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);