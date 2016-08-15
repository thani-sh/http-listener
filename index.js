var http = require('http')

var server = http.createServer(function (req, res) {
  console.log(`\n${new Date().toLocaleTimeString()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`HEADERS: ${JSON.stringify(req.headers, null, 2)}`);
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
})

server.listen(process.env.PORT)
