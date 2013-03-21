var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello CopenhagenJS from Github!');
}).listen(process.env.port || 3000);