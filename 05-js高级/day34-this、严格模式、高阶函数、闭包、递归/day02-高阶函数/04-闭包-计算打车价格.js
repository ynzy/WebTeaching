/*需求分析
  打车起步价13(3公里内),  
  之后每多一公里增加 5块钱.  
  用户输入公里数就可以计算打车价格

  如果有拥堵情况,总价格多收取10块钱拥堵费
*/
/* var car = function (n) {
	var start = 13
	var total = 0
	return function () {
		if (n <= 13) {
			total = start
		} else {
			total = start + (n - 3) * 5
		}
		return total
	}
}
let r = car(13)
console.log(r()) */

var car = (function () {
	var start = 13
	var total = 0
	// n 公里数
	return {
		price: function (n) {
			if (n <= 3) {
				total = start
			} else {
				total = start + (n - 3) * 5
			}
			return total
		},
		yd: function (flag) {
			return flag ? total + 10 : total
		}
	}
})()
// car(3)
console.log(car.price(4))
console.log(car.yd(true))
