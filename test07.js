let foo = (arg1, arg2) => {
  let foobar = (arg3) => {
    return arg3 * 3
  }
  return foobar(arg1 + arg2)
}

let result = foo // редактируем только эту строку


// вернуть случайное число от 1 до 100, но одинаковое при каждом обращении
module.exports = result