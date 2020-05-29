// 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
// 3 * 2
// 2 * 1
function fn(n) {
	if (n == 1) {
		return 1
	}
	return n * fn(n - 1)
}
console.log(fn(3))

// 3 * fn(2)
// 3 * 2 * fn(1)
// 3 * 2 * 1
