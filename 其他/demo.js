let arr = [{
  id: 1,
  name: '1'
}, {
  id: 2,
  name: '2'
}]

let newArr = arr.filter(item => item.id != 1)
console.log(newArr);
