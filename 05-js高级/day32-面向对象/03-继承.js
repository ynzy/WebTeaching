class Father {
	constructor(name) {
		this.name = name
	}
	say() {
		console.log('说话')
	}
}

// 子类继承父类 拥有了父类的属性和方法
class Son extends Father {}
var son = new Son('zhangsan')
console.log(son)
son.say()
