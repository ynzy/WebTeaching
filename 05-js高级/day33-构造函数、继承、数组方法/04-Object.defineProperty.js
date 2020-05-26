/* Object.defineProperty(对象，修改或新增的属性名，{
    value:修改或新增的属性的值,
    writable:true,//如果值为false 不允许修改这个属性值
    enumerable: false,//enumerable 如果值为false 则不允许遍历
    configurable: false  //configurable 如果为false 则不允许删除这个属性 属性是否可以被删除或是否可以再次修改特性
}) */

var obj = {
	id: 1,
	pname: '小米',
	price: 1999,
	num: 2000
}

// 1. 以前添加修改属性
// obj.num = 3000
// obj.les = '123'
// console.log(obj)
/* Object.defineProperty(obj, 'num', {
	value: 1000,
	// 如果值为false 不允许修改这个属性值 默认值也是false
	writable: false
})
obj.num = '1'
console.dir(obj) */

Object.defineProperty(obj, 'address', {
	value: '北京大学',
	// 如果值为false 不允许修改这个属性值 默认值也是false
	writable: false,
	// enumerable 如果值为false 则不允许遍历, 默认的值是 false
	enumerable: false,
	// configurable 如果为false 则不允许删除这个属性 不允许在修改第三个参数里面的特性 默认为false
	configurable: false
})
obj.address = '123'
console.log(obj)
delete obj.address
console.log(obj)
console.log(Object.keys(obj))
