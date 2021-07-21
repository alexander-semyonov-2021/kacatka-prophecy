const HOST = 'localhost'
const PORT = 3000

let http = require('http')
let path = require('path')

let router = require('./router')
let rand = require('./rand')

http.createServer(async function (req, res) {

  try {
      await router(req, res)
  } catch (e) {
    console.warn(e.code, e.message)
    res.writeHead( 520, {'Content-Type': 'text/html; charset=utf-8' } );
    res.end(e.message)
  }


}).listen(PORT, function() {
  console.log(`server start at port ${PORT}`);
});

console.log(`Backend Server started at ${HOST}:${PORT}`)