let fs = require('fs')
let rand = require('./rand')

let test01 = require('./test01')
let test02 = require('./test02')
let test03 = require('./test03')
let test04 = require('./test04')
let test05 = require('./test05')
let test06 = require('./test06')
let test07 = require('./test07')
let test08 = require('./test08')
let test09 = require('./test09')
let test10 = require('./test10')
let test11 = require('./test11')

let router = async (req, res) => {

  let out = ''
  if (req.url === '/1') {
    out = test01
  }
  else if (req.url === '/2') {
    out = test02
  }
  else if (req.url === '/3') {
    out = test03
  }
  else if (req.url === '/4') {
    out = test04
  }
  else if (req.url === '/5') {
    out = test05()
  }
  else if (req.url === '/6') {
    out = test06()
  }
  else if (req.url === '/7') {
    out = test07()
  }
  else if (req.url === '/8') {
    out = test08()
  }
  else if (req.url === '/9') {
    out = test09()
  }
  else if (req.url === '/10') {
    out = test10()
  }
  else if (req.url === '/11') {
    out = test11()
  }
  else {
    out = 'KACATKA YPOKu v0.0.2'
  }

  res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8;'} )
  res.write(out.toString())
  res.end()

}

module.exports = router;
