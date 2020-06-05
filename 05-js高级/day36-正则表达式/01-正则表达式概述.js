// let regexp = new RegExp(/123/)
// console.dir(regexp)
// let rg = /123/
// let str = '123'
// console.log(rg.test(str))
// console.log(rg.test('abc'))

/* var rg = /abc/
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd')) */

/* var rg = /^abc/
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd')) */
/* 
var rg = /abc$/
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd'))
console.log(rg.test('aabc'))
 */

/* var rg = /^abc$/
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd'))
console.log(rg.test('aabc'))
 */

/* var rg = /[abc]/ // 只要包含有a 或者 包含有b 或者包含有c 都返回为true
console.log(rg.test('abc'))
console.log(rg.test('abcd'))
console.log(rg.test('aabcd'))
console.log(rg.test('aabc'))
console.log(rg.test('erft')) */

/* var rg1 = /^[abc]$/ // 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true
//  /^a$/ /^b$/ /^c$/
console.log(rg1.test('aa')) //false
console.log(rg1.test('a')) //true
console.log(rg1.test('b')) //true
console.log(rg1.test('c')) //true
console.log(rg1.test('abc')) //false */

/* var reg = /^[a-z]$/ //26个英文字母任何一个字母返回 true  - 表示的是a 到z 的范围
console.log(reg.test('a')) //true
console.log(reg.test('z')) //true
console.log(reg.test('A')) //false
console.log(reg.test('dd')) //false */

//字符组合
/* var reg1 = /^[a-zA-Z0-9_-]$/ // 26个英文字母(大写和小写都可以)任何一个字母返回 true
console.log(reg1.test('a'))
console.log(reg1.test('B'))
console.log(reg1.test(8))
console.log(reg1.test('-'))
console.log(reg1.test('_'))
console.log(reg1.test('!')) */

//取反 方括号内部加上 ^ 表示取反，只要包含方括号内的字符，都返回 false 。
/* var reg2 = /^[^a-zA-Z0-9]$/
console.log(reg2.test('a')) //false
console.log(reg2.test('B')) //false
console.log(reg2.test(8)) //false
console.log(reg2.test('!')) //true */

// 量词符: 用来设定某个模式出现的次数
/* var reg = /^a$/
console.log(reg.test('a'))
console.log(reg.test('aa')) */

// 1. * 相当于 >= 0 可以出现0次或者很多次
/* var reg = /^a*$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aa'))
console.log(reg.test('aaaaaa')) */

// 2. + 相当于 >= 1 可以出现1次或者很多次
/* var reg = /^a+$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aa'))
console.log(reg.test('aaaaaa')) */

// 3. ?  相当于 1 || 0
/* var reg = /^a?$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aa'))
console.log(reg.test('aaaaaa')) */

// 4. {3 } 就是重复3次
/* var reg = /^a{3}$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aaa'))
console.log(reg.test('aaaaaa'))
 */

// 5. {3, }  大于等于3
/* var reg = /^a{3,}$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aa'))
console.log(reg.test('aaaaaa'))
console.log(reg.test('aaa')) */

// 6. {3, 16}  大于等于3 并且 小于等于16
/* var reg = /^a{3,16}$/
console.log(reg.test(''))
console.log(reg.test('a'))
console.log(reg.test('aa'))
console.log(reg.test('aaaaaa'))
console.log(reg.test('aaa'))
console.log(reg.test('aaaaaaaaaaaaaaaaaaaaa')) */
