// 数组求和、平均值
var arr = [2, 6, 1, 7, 4];
var sum = 0; //总和
var average = 0; //平均值
for (var i = 0; i < arr.length; i++) {
  sum += arr[i]
}

average = sum / arr.length
console.log(sum);
console.log(average);

// 数组最大值
var arr = [2, 6, 1, 77, 52, 25, 7, 99];
var max = arr[0];
arr.forEach(function (item, index) {
  // 回调函数
  // item 数组元素 index 数组索引
  // console.log(index + '---' + item);
  if (item > max) {
    max = item
  }
});
console.log(max);

// 数组转换为分割字符串
var arr = ['red', 'green', 'blue', 'pink'];
var str = ''
var tag = '*'
arr.forEach(function (item, index) {
  str += item + tag
});

// red*green*blue*pink*
console.log(str);

var arr1 = ['red', 'green', 'blue'];
arr1[3] = 'pink'
console.log(arr1);

arr1 = ['yellow']
console.log(arr1);
// 新建一个数组，里面存放10个整数（ 1~10）
var arr = []
for (var i = 0; i < 10; i++) {
  arr[i] = i + 1
}
console.log(arr);



// 筛选数组
// 将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 中大于等于 10 的元素选出来，放入新数组。
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = []
for (var i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    newArr[newArr.length] = arr[i]
  }
}

console.log(newArr);


console.log(Array);
