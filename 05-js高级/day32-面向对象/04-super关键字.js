class Father {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	add() {
		console.log(this.x + this.y)
	}
	say() {
		// console.log('我是爸爸')
		return '我是爸爸'
	}
}

class Son extends Father {
	constructor(x, y, a, b) {
		super(x, y) //使用super调用了父类中的构造函数
		this.a = a
		this.b = b
	}
	say() {
		// console.log(super.say())

		console.log(super.say() + '儿子')
	}
	reduce() {
		console.log(this.a - this.b)
	}
}
var son = new Son(1, 2, 4, 3)
son.add()
// son.say()
son.reduce()

/* function say() { 
  return '123'
}

console.log(say()) */
