let fs = require('fs');
let rand = require('./rand');

let router = async (req, res) => {

  let randomProphecy = () => {
    let data = fs.readFileSync('prophecies.txt').toString().trim();
    let strings = data.split("\n")
    let randomNumber = rand(0,strings.length-1)
    let randomString = strings[randomNumber]
    return randomString
  }
  let prophecy = randomProphecy()

  res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8;'} );
  // res.write('KACATKA PROPHECY v0.0.1');
  res.write(prophecy);
  res.end()

}

module.exports = router;