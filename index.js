var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 3000;
server.listen(port, '18.221.61.3');
var host = server.address().address;
var serverport = server.address().port;
console.log('running at http://' + host + ':' + serverport)


