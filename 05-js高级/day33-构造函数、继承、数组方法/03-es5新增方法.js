/* var arr = [1, 2, 3]
var newArr = arr.forEach(function (item, index, array) {
	console.log(item + '------' + index)
	// return array
})
console.log(newArr) */

/* var arr = [12, 66, 4, 88, 3, 7]
var newArr = arr.filter(function (item, index, array) {
	console.log(item)
	if (item > 20) {
		return item
	}
	return item > 20
})
console.log(newArr)
 */

// some 查找数组中是否有满足条件的元素
var arr = [10, 30, 4]
var isArr = arr.some(function (item, index, array) {
	return item > 30
})
console.log(isArr)

var str = '   hello   '
console.log(str)

console.log(str.trim())

var obj = {
	id: 1,
	pname: '小米',
	price: 1999,
	num: 2000
}
console.log(Object.keys(obj))
var newObj = {}
// 浅拷贝
Object.keys(obj).forEach(function (key) {
	newObj[key] = obj[key]
})
// newObj = obj
newObj.id = 2
console.log(newObj)
console.log(obj)
