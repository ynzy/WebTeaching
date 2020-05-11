function fn() {
  console.log(1);
}
fn()

  // 1.(function() {})()    或者  2. (function(){}());

  (function (a, b) {
    console.log(1);
    console.log(a + b);

  })(1, 2)

  (function (a, b) {
    console.log('2');
    console.log(a + b);

  }(2, 3))

// 1. 不用调用，立即执行
// 2. 避免全局作用域污染

function fn() {
  var a = '1'
  console.log(a);
}
fn()
console.log(a);

var a = 1;
(function () {
  // var a = 1
  console.log(a);
})()
console.log(a);


(function () {
  for (var i = 0; i < 4; i++) {

  }
  console.log(i);
})()
console.log(i);
