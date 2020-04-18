// 1. 求 1~100的累加和
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 2. 求 10~50的累加和
var sum = 0;
for (var i = 10; i <= 50; i++) {
  sum += i;
}
console.log(sum);


// 3. 函数就是封装了一段可以被 重复执行调用的代码块 目的： 就是让大量代码重复使用
function getSum(num1, num2) {
  var sum = 0;
  for (var i = num1; i <= num2; i++) {
    sum += i;
  }
  console.log(sum);
}
getSum(1, 100)
getSum(10, 50)