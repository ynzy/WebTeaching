// var now = new Date();
// console.log(now);
// var future = new Date('2019/5/1');
// console.log(future);


var date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getTime());  // 时间戳
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
var year = date.getFullYear()
var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
var dates = date.getDate();
var day = date.getDay()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day] + hours + ':' + minutes + ':' + seconds);


var date1 = +new Date(); // +new Date()  返回的就是总的毫秒数
console.log(date1);
var date = new Date();
console.log(date.getTime());
console.log(Date.now());



// 倒计时效果
// 1.核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时 ，但是不能拿着时分秒相减，比如 05 分减去25分，结果会是负数的。
// 2.用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数。
// 3.把剩余时间总的毫秒数转换为天、时、分、秒 （时间戳转换为时分秒）
// 转换公式如下： 
//  d = parseInt(总秒数/ 60/60 /24);    //  计算天数
//  h = parseInt(总秒数/ 60/60 %24)   //   计算小时
//  m = parseInt(总秒数 /60 %60 );     //   计算分数
//  s = parseInt(总秒数%60);            //   计算当前秒数
function countDown(time) {
  var nowTime = Date.now()
  var inputTime = +new Date(time)
  console.log(nowTime);
  console.log(inputTime);
  var times = (inputTime - nowTime) / 1000
  var d = computed(parseInt(times / 60 / 60 / 24)); // 天
  var h = computed(parseInt(times / 60 / 60 % 24)); //时
  var m = computed(parseInt(times / 60 % 60)); // 分
  var s = computed(parseInt(times % 60)); // 当前的秒
  return d + '天' + h + '时' + m + '分' + s + '秒';
}
function computed(n) {
  return n < 10 ? '0' + n : n
}
var result = countDown('2020-8-1 0:00:00')
console.log(result);


// 8、格式化日期
var formatDateTime = function (date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? ('0' + minute) : minute;
  var second = date.getSeconds();
  second = second < 10 ? ('0' + second) : second;
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
};

formatDateTime(new Date())

// 2019年01月20日
// 2019年01月20日12:22:33
// 2020-03-22 22:22:22
function computed(n) {
  return n < 10 ? '0' + n : n
}
var formatDate = function (date, key) {
  date = new Date(date)
  // console.log(date);
  var y = date.getFullYear()
  var m = computed(date.getMonth() + 1)
  var d = computed(date.getDate())
  var h = computed(date.getHours())
  var minute = computed(date.getMinutes())
  var second = computed(date.getSeconds())
  switch (key) {
    case '年 月 日':
      return y + '年' + m + '月' + d + '日'
    case 'yyyy-mm-dd HH:mm:ss':
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    default:
    case 'yyyy-mm-dd HH:mm:ss':
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  }
}

console.log(formatDate(+new Date(), '年 月 日'));
console.log(formatDate(+new Date(), 'yyyy-mm-dd HH:mm:ss'));
console.log(formatDate(+new Date()));