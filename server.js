console.log("estoy funcionando al pelo");

var http = require('http');
var fs = require('fs');

function send404Response(response){
  response.writeHead(404,{"context-type": "text/plain"});
  response.write("Error 404,Page not found");
  response.end();
}

function onRequest(request,response){
  if(request.method == 'GET' && request.url == '/'){
    response.writeHead(200,{"context-type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
    fs.createReadStream("./css/modern-business.css").pipe(response);
  }else {
    send404Response(response);
  }
}
http.createServer(onRequest).listen(8080);
console.log("server is now runing")
