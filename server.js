const HOST = 'localhost'
const PORT = 3000

let http = require('http')
let path = require('path')

let router = require('./router')
let rand = require('./rand')

http.createServer(async function (req, res) {

  try { // try - попробовать - пробуем какой-то код
    await router(req, res)
  } catch (e) { // catch - поймать - "ловим" сервер, чтобы не "упал"
    console.warn(e.code, e.message) // смотрим в консоли что не так
    res.writeHead( 520, {'Content-Type': 'text/html; charset=utf-8' } );
    res.end(e.message) // выдаём ответ клиенту (можно изменить на что-то вроде "сервер временно недоступен")
  }


}).listen(PORT, function() {
  console.log(`server start at port ${PORT}`);
});

console.log(`Backend Server started at ${HOST}:${PORT}`)