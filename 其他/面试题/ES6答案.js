/**
 * 1. 有以下对象
 * (1) 使用解构方式，分别输出type和name，分别重命名为newType和newName
 * (2) 将剩余参数输出到一个新的对象NewData中
 *
 * 解构赋值
 */

let node = {
	type: 'Identifier',
	name: 'foo',
	age: '1',
	sex: '男'
}
// 答案
let { type: newType, name: newName, ...newData } = node
console.log(newType, newName, newData)

/**
 * 2. 下面的数组中，
 * 查找id=1的项，添加hobby属性，值为乒乓球
 * 查找id=2的项，添加hobby属性，值为羽毛球
 * 使用模版字符串，最后输出字符串
 * 姓名：张三,年龄:23,爱好：乒乓球,姓名：李四,年龄:12,爱好：羽毛球
 *
 * 数组字符串操作
 */

let arr = [
	{
		id: 1,
		name: '张三',
		age: 23
	},
	{
		id: 2,
		name: '李四',
		age: 12
	}
]

// 答案
let template = null
let templateArr = []
let str = ''
arr.map(item => {
	if (item.id == 1) {
		item.hobby = '乒乓球'
	}
	if (item.id == 2) {
		item.hobby = '羽毛球'
	}
	template = `姓名：${item.name},年龄:${item.age},爱好：${item.hobby}`
	templateArr.push(template)
})
str = templateArr.join(',')
console.log(arr)
console.log(str)

/**
 * 3. 使用set方法进行数组去重
 * 输出：[1, 2, 4, 5, 6, 7, 8]
 *
 * set
 */

let arr = [1, 2, 4, 5, 6, 7, 8, 4, 2, 1, 4]
// 答案
let newArr = Array.from(new Set(arr))
console.log(newArr)

/**
 * 4. 合并对象
 * 输出：{ name: '张三', age: 123, hobby: '羽毛球' }
 *
 * 对象合并
 */

let obj = {
	name: '张三',
	age: 123
}

let obj1 = {
	hobby: '羽毛球'
}
// 答案
let newObj = Object.assign(obj, obj1)
console.log(newObj)

/**
 * 5. 使用解构赋值合并数组
 * 输出：[1, 2, 4, 5, 6, 7, 8]
 *
 * 解构赋值
 */

let arr = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
// 答案：
let newArr = [...arr, ...arr2]
console.log(newArr)

/**
 * 6. 请看下面的方法
 *
 * 请编写一个新函数 getUserInfoAsync,调用getUserInfo，确保返回的是Promise。
 * 请编写通用函数promisify，通过一个回调传递结果的函数生成Promise的函数
 *
 * Promise
 */

function request(url, cb) {
	cb(null, { data: '111' })
}

function getUserInfo(cb) {
	request('http://exple.com', (err, result) => {
		if (err) {
			if (cb) {
				cb(err)
			}
			return
		}
		if (cb) {
			cb(null, result.data)
		}
	})
}
// 答案
function getUserInfoAsync() {
	return new Promise((resolve, reject) => {
		getUserInfo((err, res) => {
			if (err) {
				reject(err)
			}
			resolve(res)
		})
	})
}
getUserInfoAsync().then(res => {
	console.log(res)
})

function promisify(cb) {
	getUserInfo((err, res) => {
		if (err) {
			cb(Promise.reject(err))
		}
		cb(null, Promise.resolve(res))
	})
}
promisify((err, res) => {
	res.then(res => {
		console.log(res)
	})
})

/**
 * 7. 数组过滤
 * (1) 过滤出下面两个id不同的项 { id: 3, name: '王五' }
 *
 */

let arr = [
	{
		id: 1,
		name: '张三'
	},
	{
		id: 2,
		name: '李四'
	},
	{
		id: 3,
		name: '王五'
	}
]

let arr2 = [
	{
		id: 1,
		age: 2
	},
	{
		id: 2,
		age: 55
	}
]
// 答案
let arr3 = arr2.map(item => item.id)
let res = arr.filter(item => {
	return !arr3.includes(item.id)
})
console.log(res)

/**
 * 8. 数组是否重复
 * 定义一个方法，判断下面的数组是否有重复项，如果有返回true
 */

let arr = [
	{
		id: 1,
		name: '张三'
	},
	{
		id: 2,
		name: '李四'
	},
	{
		id: 3,
		name: '王五'
	},
	{
		id: 2,
		name: '赵六'
	}
]

// 答案：
function isRepeat(arr) {
	let arr2 = arr.map(item => item.id)
	if (arr.length != new Set(arr2).size) {
		return true
	}
	return false
}
let res = isRepeat(arr)
console.log(res)
