// 利用函数求任意个数的最大值
function getMax() {
  console.log(arguments);  // arr
  var max = arguments[0]
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  // console.log(max);
  return max
}

var result = getMax(1, 2, 3, 4, 5, 6, 7)
console.log(result);


// 利用函数翻转任意数组 reverse 翻转
// 1,2,3,4,5
// 5,4,3,2,1
// [5,4,3] 3
function reverse(arr) {
  var newArr = []
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr[newArr.length] = arr[i]
  }
  return newArr
}
var result = reverse([1, 2, 3, 4, 5])
console.log(result);


// 利用函数冒泡排序 sort 排序
function sort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      var temp = null;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}
var result = sort([1, 4, 2, 9])
console.log(result);

// 利用函数判断闰年
function isRunYear(year) {
  // 如果是闰年就返回true，否则返回false
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
}
var result = isRunYear(2000)
var result = isRunYear(1999)
console.log(result);
