function fn(a, b) {
	console.log(a + b)
}
var fn = function () {}

// var fn = new Function('参数1','参数2'..., '函数体')
var fn = new Function('a', 'b', 'console.log(a + b)')
fn(1, 2)
console.dir(fn)
