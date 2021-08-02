let fs = require('fs')
const cat = require('./cat')


let router = async (req, res) => {

  let out = ''
  if (req.url === '/') {
    cat.raise()
    out += cat.loadHistory()
  } else {
    out = '404'
  }

  res.writeHead( 200, { 'Content-Type': 'text/plain; charset=utf-8;'} )
  res.end(out)

}

module.exports = router;
