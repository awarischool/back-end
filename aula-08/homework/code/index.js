const http = require('http');
var fs = require('fs');

const PORT = 3000;

http.createServer(function (req, res) {
  fs.readFile('example.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(PORT);