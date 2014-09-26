var http = require('http')
var connect = require('connect')

var app = connect()
    app.use(connect.json())
    app.use(function (req, res) {
      console.log('\n', new Date())
      console.log(' - body: ', JSON.stringify(req.body))
      res.writeHead(200)
      res.end('response')
    });

http.createServer(app)
    .listen(process.env.PORT || 8000)
