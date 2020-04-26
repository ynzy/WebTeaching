// console.log(Math.PI);
// console.log(Math.max(1, 4, 5, 6));
// console.log(Math.min(1, 4, 5, 6));

var myMath = {
  PI: 3.141592653,
  max: function () {
    var max = arguments[0]
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] > max) {
        max = arguments[i]
      }
    }
    return max
  },
  min: function () {
    var min = arguments[0]
    for (var i = 1; i < arguments.length; i++) {
      if (arguments[i] < min) {
        min = arguments[i]
      }
    }
    return min
  }

}

// console.log(myMath.PI);
console.log(myMath.max(1, 2, 3, 4, 5));
console.log(myMath.min(1, 2, 3, 4, 5));


// (1) Math.floor()   地板 向下取整  往最小了取值
console.log(Math.floor(1.1));
console.log(Math.floor(1.9));
// (2) Math.ceil()   ceil 天花板 向上取整  往最大了取值
console.log(Math.ceil(1.1));
console.log(Math.ceil(1.9));
// (3) Math.round()   四舍五入  其他数字都是四舍五入，但是 .5 特殊 它往大了取
console.log(Math.round(1.1));
console.log(Math.round(1.5));
console.log(Math.round(1.9));
console.log(Math.round(0.5));
console.log(Math.round(-1.1));
console.log(Math.round(-1.5));


console.log(Math.random());

// 我们想要得到两个数之间的随机整数 并且 包含这2个整数
// 1-5
console.log(Math.floor(Math.random() * (5 - 1 + 1)) + 1);

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}