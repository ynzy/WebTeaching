var ldh = {
	name: '刘德华',
	age: 28
}

console.log(ldh)

var that = null
// 抽象事物 构造函数
function Star(name, age) {
	that = this
	this.name = name
	this.age = age
}

// 抽象事物 -> 具体的事物
var ldh = new Star('刘德华', 39)

console.log(ldh == that)

class Star {
	constructor(name, age) {
		// console.log(this)

		this.name = name
		this.age = age
	}

	// 注意,方法与方法之间不需要添加逗号
	sing(singname) {
		console.log(this.name + '唱了' + singname)
	}
}

var ldh = new Star('刘德华', 18)
ldh.sing('冰雨')
console.log(ldh)

//(1) 通过class 关键字创建类, 类名我们还是习惯性定义首字母大写
//(2) 类里面有个constructor 函数,可以接受传递过来的参数,同时返回实例对象
//(3) constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自动生成这个函数
//(4) 生成实例 new 不能省略
//(5) 最后注意语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加function
