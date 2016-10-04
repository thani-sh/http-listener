#!/usr/bin/env node

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer(function (req, res) {
  console.log(`\n${new Date().toLocaleTimeString()}`)
  console.log(`${req.method} ${req.url}`)
  console.log(`HEADERS: ${JSON.stringify(req.headers, null, 2)}`)

  let data = '';
  req.on('data', d => data = data + d.toString())
  req.on('end', () => {
    console.log(`CONTENT: ${data}`)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World\n')
  })
})

server.listen(port)
