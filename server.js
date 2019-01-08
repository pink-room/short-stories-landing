var static = require('node-static');

var PORT = process.env.PORT || 3000;
 
var file = new static.Server('./');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(PORT);

console.log('Listening on :' + PORT);
