function sum() {
  console.log('执行');
  // return '我是返回值'
  return
  console.log('执行2');
}
var a = sum()
console.log(a);


function sum(a, b) {
  // console.log(a + b);
  return a + b
}
var getSum = sum(1, 2)
console.log(getSum);
sum(2, 4)

// 利用函数 求两个数的最大值
function getMax(a, b) {
  // if (a > b) {
  //   return a
  // } else { 
  //   return b
  // }
  return a > b ? a : b
}

var result = getMax(1, 5)
console.log(result);


// 利用函数求数组 [5,2,99,101,67,77] 中的最大数值。
var arr = [5, 2, 99, 101, 67, 77];
function getArrMax(arr) {
  var max = arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  // console.log(max);
  return max
}
var result = getArrMax(arr)
console.log(result);
