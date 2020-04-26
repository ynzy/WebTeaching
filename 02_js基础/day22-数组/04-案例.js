// 要求：将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]中的 0 去掉后，
// 形成一个不包含 0 的新数组。
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7]
var newArray = []
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    newArray[newArray.length] = arr[i]
  }
}
console.log(newArray);

// 将数组 ['red', 'green', 'blue', 'pink', 'purple'] 的内容反过来存放
var arr = ['red', 'green', 'blue', 'pink', 'purple']
var newArr = [];
for (var i = arr.length - 1; i >= 0; i--) {
  newArr[newArr.length] = arr[i]
}
console.log(newArr);
console.log(arr.reverse());

