var http = require('http');
var static = require('./static.js');
// var serveStaticAsset = require('./static.js').serveStaticAsset;
// var canHandleRequest = require('./static.js').canHandleRequest;

http.createServer(function (request, response) {
    debugger;
    console.log(`Incoming request: ${request.url}`);
    if(static.canHandleRequest(request)) {
        static.serveStaticAsset(request, response);
        return;
    }

    response.end('Hello World');
}).listen(3000, 'localhost', () => {
    console.log('Server is Listening');
});