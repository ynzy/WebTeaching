// var str = 1
// console.log(str);
// setTimeout(() => {
//   str = 3
//   console.log(str);

// }, 3000);

// 字符串的不可变性
// var str = 'andy';
// console.log(str);
// str = 'red';
// console.log(str);
// // 因为我们字符串的不可变所以不要大量的拼接字符串
// var str = '';
// for (var i = 1; i <= 1000000000; i++) {
//   str += i;
// }
// console.log(str);

var str = 'abcdef'
// console.log(str.indexOf('b',0));

console.log(str.charAt('c'));
console.log(str.charCodeAt('c'));
console.log(str[2]);

var str = '12345'
console.log(str[2]);


var str = '我学习前端'
console.log(str.substr(3, 2));
console.log(str.replace('我', '你'));
var str = 'abnanana'
while (str.indexOf('a') != -1) {
  str = str.replace('a', 'c')
}
console.log(str);

