/* let arr = [1, 3, 4]
console.log(...arr)
console.log(1, 3, 4) */

// 合并数组的方法
/* let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7] */
// [1,2,3,4,5,6,7]

/* arr2.forEach(item => {
	arr1.push(item)
})
console.log(arr1) */

/* let newarr = arr1.concat(arr2)
console.log(newarr) */

/* let newArr = [...arr1, ...arr2]
console.log(newArr) */

//定义一个集合
/* let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
}

console.log(arrayLike)
let arr2 = Array.from(arrayLike)
console.log(arr2) */

/* let arr3 = [1, 2, 3]
let newArr = arr3.map(item => {
	console.log(item)
	// if (item == 1) {
	// 	item = 5
	// }
	return (item = 5)
})
console.log(newArr) */

/* let arrayLike = {
	'0': 1,
	'1': 2,
	length: 2
}
let newarr = Array.from(arrayLike, function (item) {
	return item * 2
})
console.log(newarr) */

// let ary = [
// 	{
// 		id: 1,
// 		name: '张三'
// 	},
// 	{
// 		id: 2,
// 		name: '李四'
// 	}
// ]
// let target = ary.find(function (item) {
// 	return item.id == 3
// })
// console.log(target)

// let target = ary.find(item => item.id == 3)
// console.log(target)

// let ary = [1, 3, 4]
// let index = ary.findIndex(item => item == 5)
// console.log(index)

// console.log(ary.includes(4))
// console.log(ary.includes(5))

// let name = 'zhangsan'
// let hei = `我是${name}`
// console.log(hei)
/* 
let result = {
	name: 'zhangsan',
	age: 20,
	sex: '男'
}
let html = ` <div>
     <span>${result.name}</span>
     <span>${result.age}</span>
     <span>${result.sex}</span>
 </div> `
console.log(html) */

/* const sayHello = function () {
	console.log('111')

	return '哈哈哈哈 追不到我吧 我就是这么强大'
}
let greet = `${sayHello()} 哈哈哈哈`
console.log(greet) // 哈哈哈哈 追不到我吧 我就是这么强大 哈哈哈哈
 */

let str = 'hello world'
console.log(str.startsWith('hello'))
console.log(str.endsWith('!'))
