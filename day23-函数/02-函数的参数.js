/* // 带参数的函数声明
function 函数名(形参1, 形参2, 形参3...) { // 可以定义任意多的参数，用逗号分隔
  // 函数体
} 
// 带参数的函数调用
函数名(实参1, 实参2, 实参3...);
*/

function sum(a, b) {
  console.log(a + '------' + b);
}

sum(1, 2)


// 1. 利用函数求任意两个数的和
function sum(a, b) {
  console.log(a + b);
}
sum(1, 2)
sum(2, 4)

// 2. 利用函数求任意两个数之间的和
function sum(start, end) {
  var sum = 0
  for (var i = start; i < end; i++) {
    sum += i
  }
  console.log(sum);

}
sum(1, 10)
sum(1, 100)

function sum(a, b, c) {
  console.log(a, b, c);

}
// 实参个数多于形参个数,只取到形参的个数
sum(1, 2, 3, 4)
// 实参个数小于形参个数,多的形参定义为 undefined,结果为NaN
sum(1, 2)