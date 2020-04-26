/* function a() {
  console.log('a');
  b()
}
function b() { 
  console.log('b');
  
}
a() */

// 用户输入年份，输出当前年份2月份的天数
function getDay() {
  var year = prompt('输入年份')
  if (isRunYear(year)) {
    alert('当年2月份有29天')
  } else {
    alert('当年2月份有28天')
  }
}
getDay()
function isRunYear(year) {
  // 如果是闰年就返回true，否则返回false
  return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
}