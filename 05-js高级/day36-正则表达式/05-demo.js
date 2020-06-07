// let text = 'cat,bat,sat,fat'
// 匹配所有以“at”结尾的3个字符的组合，不区分大小写
/* let parttern1 = /.at/
var matches = parttern1.exec(text)
console.log(matches.index) // 0
console.log(matches[0]) // cat
console.log(parttern1.lastIndex) //0

matches = parttern1.exec(text)
console.log(matches.index) // 0
console.log(matches[0]) // cat
console.log(parttern1.lastIndex) // 0 */

/* let parttern2 = /.at/g
var matches = parttern2.exec(text)
console.log(matches)

console.log(matches.index) // 0
console.log(matches[0]) // cat
console.log(parttern2.lastIndex) // 3

matches = parttern2.exec(text)
console.log(matches)
console.log(matches.index) // 4
console.log(matches[0]) // bat
console.log(parttern2.lastIndex) // 7 */

/* matches = parttern2.exec(text)
console.log(matches.index) // 8
console.log(matches[0]) // sat
console.log(parttern2.lastIndex) // 11 */

let text = 'cat,bat,sat,fat'
let parttern2 = /.at/g
function regNum(text) {
	let matches = parttern2.exec(text)
	console.log(matches)
	if (matches == null) {
		return
	}
	regNum(text)
}
regNum(text)

let str = '123456'
let reg = /\d{1}/g
/* let matches = reg.exec(str)
console.log(matches)
matches = reg.exec(str)
console.log(matches) */
/* function regNum(str) {
	let matches = reg.exec(str)
	console.log(matches)
	if (matches == null) {
		return
	}
	regNum(str)
}
regNum(str)
 */
