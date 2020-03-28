/**
 * return
 * 1. 终止函数的执行
 * 2. 返回一个值给调用者
 * 表达式：
 * return [[expression]];
 * 如果expression没有值，返回的是undefined
 */

/**
 * 求和方法
 * @param {*} a 数值
 * @param {*} b 数值
 */
function sum(a, b) {
  let sum = a + b
  console.log(sum)
  return sum
  // mul(sum,3)
}
/**
 * 乘法
 * @param {*} c
 * @param {*} d
 */
function mul(c, d) {
  let sum = c * d;
  console.log(sum);
}
// sum(1,2)
let result = sum(1, 2)
let result2 = mul(result, 3)
// console.log(result);


function a() {
  console.log('a');
  // 一个函数可以调用另一个函数
  b()
}
function b() {
  console.log('b');
}
// 我先打印a再打印b
a()

/**
 * 闭包：一个函数返回另一个函数
 */

/* function magic() {
  return function(x) {
    return x *2
  }
}
let result = magic()
console.log(result(2)); */
