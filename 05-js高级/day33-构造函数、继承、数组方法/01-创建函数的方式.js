/* function Person(name, age) {
	this.name = name
	this.age = age
}

var obj = new Person('zs', 123)
 */
/* function Star(name, age) {
	this.name = name
	this.age = age
	// this.sing = function () {
	// 	console.log('我会唱歌--this.sing')
	// }
}
// Star.sex = '男'
// 静态成员只能通过构造函数来访问
// console.log(Star.sex)
Star.prototype.sing = function () {
	console.log('我会唱歌')
}
console.dir(Star)

var ldh = new Star('柳大华', 123)
var zxy = new Star('张学友', 123)
// console.log(ldh.name)
console.dir(ldh)
console.dir(zxy)
console.log(ldh.__proto__ === Star.prototype)

ldh.sing()
zxy.sing() */

/* function Star(name, age) {
	this.name = name
	this.age = age
}

Star.prototype.sing = function () {
	// console.log(this)

	console.log('我会唱歌')
}
// Star.prototype.move = function () {
// 	console.log('我会演电影')
// }
var that = null
Star.prototype = {
	// 如果我们修改了原来的原型对象,给原型对象赋值的是一个对象,则必须手动的利用constructor指回原来的构造函数
	constructor: Star,
	sing: function () {
		// console.log(this)
		that = this
		console.log('我会唱歌')
	},
	move: function () {
		console.log('我会演电影')
	}
}

Object.prototype.say = function () {
	console.log('我会说话')
}
console.dir(Star)

var ldh = new Star('刘德华', 123)
var zxy = new Star('张学友', 123)
// console.log(ldh.__proto__ === Star.prototype)
ldh.sing()
ldh.say()
console.dir(ldh)
console.log(that == ldh)

// console.dir(zxy)
// console.log(Object.prototype.__proto__)
 */
console.dir(Array)
// 求和方法
Array.prototype.sum = function () {
	var sum = 0
	for (var i = 0; i < this.length; i++) {
		sum += this[i]
	}
	return sum
}

var arr = [1, 2, 3]
// console.dir(arr)
// console.log(arr.sum())
var arr1 = new Array(1, 2, 3)
// console.log(arr1.sum())

/* Array.prototype.concat = function () {
	return '我修改了原有的concat方法 '
} */
// concat
var newArr = arr.concat(arr1)
console.log(newArr)

var arr = [1, 2, 3]
var arr2 = [4, 5, 6]
// 数组拼接的方法
var newArr = arr.concat(arr2)
console.log(newArr)

console.dir(Array)
