// 高阶函数- 函数可以作为参数传递
function fn(a, b, callback) {
	console.log(a + b)
	callback && callback(a + b)
}
fn(1, 2, function () {
	console.log('回调函数')
})

function fn(a, b) {
	console.log(a, b)
	return function (c, d) {
		console.log(c, d)
		console.log(a + b)
		console.log('匿名函数')
		return c + d
	}
}
var fn1 = fn(1, 2)
var r = fn1(3, 4)
console.log(r)
