var arr = [5, 4, 3, 2, 1]

for (var i = 0; i < arr.length - 1; i++) { // 外层循环控制循环趟数
  for (var j = 0; j < arr.length - i - 1; j++) { //内层循环控制比较次数
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j];
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
console.log(arr);
