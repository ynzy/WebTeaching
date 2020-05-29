var data = [
	{
		id: 1,
		name: '家电',
		goods: [
			{
				id: 11,
				gname: '冰箱',
				goods: [
					{
						id: 111,
						gname: '海尔'
					},
					{
						id: 112,
						gname: '美的'
					}
				]
			},
			{
				id: 12,
				gname: '洗衣机'
			}
		]
	},
	{
		id: 2,
		name: '服饰'
	}
]
// 我们想要做输入id号,就可以返回的数据对象
// 1. 利用 forEach 去遍历里面的每一个对象

function getID(list, id) {
	var o = {}
	list.forEach(function (item) {
		if (item.id == id) {
			o = item
		} else if (item.goods && item.goods.length > 0) {
			o = getID(item.goods, id)
		}
	})
	return o
}
// console.log(getID(data, 1))
// console.log(getID(data, 2))
// console.log(getID(data, 11))
// console.log(getID(data, 12))
console.log(getID(data, 111))
