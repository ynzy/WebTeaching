// 1.
console.log(num);
// 2. 
console.log(num);  // undefined  坑1
var num = 2;
// 相当于执行了一下代码
// var num;
// console.log(num);
// var num = 2;

// 3.
function fn() {
  console.log(111);

}
fn()

// 4.
fn()  // fn is not a function 坑2
var fn = function () {
  console.log('111');

}

// 相当于执行了以下代码
// var fn;
// fn()
// fn = function () { 
//   console.log('111');  
// }

function fun() {
  console.log('111');

}
fun()

  ; (function () {
    console.log('1');

  })()