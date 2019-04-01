console.log("estoy funcionando al pelo");

var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(8080);
console.log("server is now runing")
