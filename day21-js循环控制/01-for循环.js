// i 0
// i 1
// i 2
// i 3
/* for (var i = 0; i < 5; i++) {
  console.log(i);
} */

// 求 1~100 之间的整数累加和
/* var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
 */

//  求1-100之间所有偶数和奇数的和
/* var even = 0;
var odd = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    // 偶数
    even += i
  } else {
    odd += i
  }
}

console.log('偶数和：' + even);
console.log('奇数和：' + odd); */


// console.log('★★★★★');
/* var str = ''
for (var i = 0; i < 5; i++) {
  str += '★'
}
console.log(str); */

/* var star = ''
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    star += '★'
  }
  star += '\n'
}
console.log(star); */
var str = ''
// 外层循环执行一次，内层循环执行(所有次数)
/* for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= i; j++) {
    // 1*1 = 1
    // 1*2 = 2 2*2=4
    str += j + 'x' + i + '=' + j * i + '\t'
  }
  str += '\n';
}
console.log(str); */


var i = 1
while (i <= 100) {
  console.log(i);
  i++
}
var i = 1
do {
  console.log(i);
  i++
} while (i <= 100)


// while 先判断再执行
// do while 先执行再判断

for (i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log('第3个包子有虫子，扔掉');
    continue //跳出本次循环，执行下一次循环
  }
  console.log('吃了第' + i + '个包子');

}


for (i = 1; i <= 5; i++) {
  if (i == 3) {
    console.log('第3个包子有虫子，扔掉');
    break  // 跳出循环，结束循环
  }
  console.log('吃了第' + i + '个包子');
}


var age;
function showAge() {

}