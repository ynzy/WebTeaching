var arr = [1, 2, 3, 4]
var arr1 = new Array(1, 2, 3, 4)
var obj = {}
// 判断一个对象是否属于某个构造函数的实例
console.log(arr1 instanceof Array);
console.log(obj instanceof Object);
console.log(obj instanceof Array);
console.log(arr1 instanceof Object);
console.log(Array instanceof Object);


console.log(Array.isArray(arr));


// 反转数组
function reverse(arr) {
  if (Array.isArray(arr)) {
    var newArr = []
    for (var i = arr.length - 1; i >= 0; i--) {
      newArr[newArr.length] = arr[i]
    }
    return newArr

  } else {
    console.log('请输入一个数组');
  }
}
reverse([1, 2, 3])
// reverse(1,2,3,4)

var arr = [1, 2]
arr.push(3)
arr.pop()
console.log(arr);
arr.unshift(0)
arr.shift()
console.log(arr);

var arr = [1, 11, 34, 5, 6]
// 从小到达排序
arr.sort(function (a, b) {
  return a - b
})
console.log(arr);
// 从大到小
arr.sort(function (a, b) {
  return b - a
})
console.log(arr);


// 返回索引号
var arr = [1, 2, 3, 4, 52, 3, 2]
console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));


// 数组去重 ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b'] 要求去除数组中重复的元素。
// 1.目标： 把旧数组里面不重复的元素选取出来放到新数组中， 重复的元素只保留一个， 放到新数组中去重。
// 2.核心算法： 我们遍历旧数组， 然后拿着旧数组元素去查询新数组， 如果该元素在新数组里面没有出现过， 我们就添加， 否则不添加。
// 3.我们怎么知道该元素没有存在？ 利用 新数组.indexOf(数组元素) 如果返回时 - 1 就说明 新数组里面没有改元素
// 封装一个 去重的函数 unique 独一无二的 

var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'x', 'c', 'b']

function unique(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }

  return newArr

}
console.log(unique(arr));


// 数组转字符串
var arr = [1, 2, 3]
console.log(typeof arr.toString());
console.log(arr.join('-'));

// 'abcdef' -> 'fedcba'
var str = 'abcdef'
console.log(str.split('').reverse().join(''));
