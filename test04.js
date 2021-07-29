let foo = () => {
  return '1,2,3' // редактируем здесь, строку менять нельзя
}

let result = foo()


// экспортировать "[1,2,3]"
module.exports = result