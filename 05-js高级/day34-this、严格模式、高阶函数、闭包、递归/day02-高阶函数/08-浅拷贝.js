var obj = {
	id: 1,
	name: 'andy',
	msg: {
		age: 18
	}
}
var o = {}

for (k in obj) {
	o[k] = obj[k]
}
console.log(o)
o.msg.age = 20
o.id = 2
console.log(o)
console.log(obj)
