/* var num = 10
// console.log(++num + 10);
console.log(10 + num++);

var a = 1
// a++
// a = a + 1
// console.log(a);
// a = a+1

console.log(a++);
console.log(a); */

var one = '1' //string
var two = 1  // number
console.log(typeof one);
console.log(typeof two);
console.log(one == two);
console.log(one === two); //数值、类型
console.log(one != two);
console.log(one !== two);

var a = 10
a += 5 // a = a+5
console.log(a);

var a = '我'
a += '是'
console.log(a);

// 7 true false
var a = (2 * 1 + 2) > 2 && !(3 + 1)
console.log(a);


// 条件成立执行代码，否则什么也不做
if (条件表达式) {
  // 条件成立执行的代码语句
}

var a = 1
var b = 1
if (a == b) {
  console.log('两只相等');

}

// 条件成立  执行 if 里面代码，否则执行else 里面的代码
if (条件表达式) {
  // [如果] 条件成立执行的代码
} else {
  // [否则] 执行的代码
}

var a = 1
var b = '1'
if (a === b) {
  console.log('等于');
} else {
  console.log('不等于');
}

var arr = [1, 3, 5, 6, 7, 10, 11, 56]
for (let index = 0; index < arr.length; index++) {
  if (arr[index] < 3) {
    console.log('小于3-' + arr[index]);
  } else if (arr[index] < 6) {
    console.log('小于6-' + arr[index]);
  } else if (arr[index] < 10) {
    console.log('小于10-' + arr[index]);
  } else {
    console.log('其他-' + arr[index]);
  }
}



console.log(false ? 2 : 3);
var arr = [1, 3, 5, 6, 7, 10, 11, 56]
for (let index = 0; index < arr.length; index++) {
  switch (arr[index]) {
    case 3:
      console.log('3-' + arr[index]);
      break;
    default:
      console.log(arr[index]);
      break;
  }
}