let foo = (something, whatever, nothing='') => {
  return 'Hello '+whatever+'!'
}

let result = foo()


// экспортировать "Hello World!"
module.exports = result