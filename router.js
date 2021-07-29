let fs = require('fs')
let rand = require('./rand')

let test01 = require('./test01')
let test02 = require('./test02')

let router = async (req, res) => {

  let out = ''
  if (req.url === '/1') {
    out = test01()
  }
  else if (req.url === '/2') {
    out = test02()
  }
  else {
    out = 'KACATKA YPOKu v0.0.2'
  }

  res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8;'} )
  res.write(out)
  res.end()

}

module.exports = router;
