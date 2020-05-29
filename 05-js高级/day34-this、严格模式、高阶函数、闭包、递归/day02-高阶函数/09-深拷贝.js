var obj = {
	id: 1,
	name: 'andy',
	msg: {
		age: 18
	},
	color: ['pink', 'red']
}
var o = {}

function deepCopy(newobj, oldobj) {
	for (k in oldobj) {
		var item = oldobj[k]
		if (item instanceof Array) {
			newobj[k] = []
			deepCopy(newobj[k], item)
		} else if (item instanceof Object) {
			newobj[k] = {}
			deepCopy(newobj[k], item)
		} else {
			newobj[k] = item
		}
	}
}
deepCopy(o, obj)
o.msg.age = 40
console.log(o)
console.log(obj)
