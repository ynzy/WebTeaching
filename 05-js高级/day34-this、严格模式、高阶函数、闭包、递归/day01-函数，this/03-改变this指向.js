var o = {
	name: 'andy'
}

function fn() {
	console.log(this)
}
// call 第一个可以调用函数 第二个可以改变函数内的this 指向
fn.call(o)
// call 的主要作用可以实现继承
function Father(uname, age, sex) {
	this.uname = uname
	this.age = age
	this.sex = sex
}
function Son(uname, age, sex) {
	Father.call(this, uname, age, sex)
}
var son = new Son('刘德华', 18, '男')
console.log(son)

// fun.apply(thisArg,[arrArray])
var o = {
	name: 'andy'
}

function fn(a, b) {
	console.log(a, b)
	console.log(this)
}
// fn(1, 2)
fn.apply(o, [1, 2])
// 1. 也是调用函数 第二个可以改变函数内部的this指向
// 2. 但是他的参数必须是数组(伪数组)

// fun.bind(thisArg,arg1,arg2,...)
var o = {
	name: 'andy'
}

function fn(a, b) {
	console.log(this)
	console.log(a + b)
}
var f = fn.bind(o, 1, 2)
f()
