/*
  js操作分为同步和异步
  同步：顺序执行的函数
  异步；回调，ajax，
*/
function fun() {
  console.log('123123');

}
// 回调函数：一个函数作为另一个函数的参数

function fun(callback) {
  // callback = function (n) {
  //   console.log(n);
  // }
  callback('1111')
}
fun(function (n) {
  console.log(n);
})



function fun(config) {
  console.log(config.data);

  // callback = function (n) {
  //   console.log(n);
  // }
  config.callback('1111')
}
fun({
  data: '123',
  callback: function (n) {
    console.log(n);
  }
})

var obj = {
  data: '123',
  callback: function (n) { 
    console.log(n);
  }
}
console.log(obj.data);
obj.callback('-----')

