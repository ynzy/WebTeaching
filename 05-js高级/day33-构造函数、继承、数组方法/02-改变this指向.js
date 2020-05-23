/* function fn(x, y) {
	console.log(this)
	console.log(x + y)
}
fn(1, 3)

var obj = {
	a: 1,
	b: 2
}
fn.call(obj, 1, 2)
 */

function Father(name, age) {
	this.name = name
	this.age = age
}
Father.prototype.money = function () {
	console.log(1000000)
}
function Son(name, age, score) {
	// this 指向子构造函数的对象实例
	// 3.使用call方式实现子继承父的属性
	Father.call(this, name, age)
	this.score = score
}
//  这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化
// Son.prototype = Father.prototype
Son.prototype = new Father()
Son.prototype.constructor = Son

Son.prototype.say = function () {
	console.log('我会说话')
}
var ldh = new Son('刘德华', 12, 333)
console.log(ldh)
ldh.money()
ldh.say()
console.log(Father.prototype)
