/* 1. 普通函数 */
function fn() {
	console.log('普通函数')
	console.log(this)
}
fn()
/* 2. 对象的方法 */
var o = {
	sayHi: function () {
		console.log('对象的方法')
		console.log(this)
	}
}
o.sayHi()
/* 3. 构造函数*/
function Star() {
	console.log('构造函数')
	console.log(this)
}
new Star()
/* 4. 绑定事件函数*/
var btn = document.body
btn.onclick = function () {} // 点击了按钮就可以调用这个函数
/* 5. 定时器函数*/
setTimeout(function () {
	console.log('定时器函数')
	console.log(this)
}, 1000)
// 这个函数是定时器自动1秒钟调用一次
/* 6. 立即执行函数(自调用函数)*/
;(function () {
	console.log('立即执行函数')
	console.log(this)
})()
