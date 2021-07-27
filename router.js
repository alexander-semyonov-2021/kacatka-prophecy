let fs = require('fs')
let rand = require('./rand')

let router = async (req, res) => {

  // создаём функцию генерации случайного сообщения
  let randomProphecy = () => {
    // Такой код, когда простые инструкции сохраняются в переменные с понятным именем проще читать.
    let data = fs.readFileSync('prophecies.txt').toString().trim()
    let strings = data.split("\n")
    let minIndex = 0
    let maxIndex = strings.length-1
    let randomNumber = rand(minIndex,maxIndex)
    let randomString = strings[randomNumber]
    return randomString
  }

  // используем функцию
  let prophecy = randomProphecy()

  // Посылаем статус сервера 200 - ОК - что значит, что запрос успешен.
  // И "заголовок", что ответ в формате html. Тогда браузер знает что нужно вывести на экран html.
  res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8;'} )
  // res.write('KACATKA PROPHECY v0.0.1');
  res.write(`<div style="color: #609">${prophecy}</div>`) // отправить html текст клиенту
  res.end() // закончить ответ, попробуйте убрать и посмотреть что получится

}

module.exports = router;
