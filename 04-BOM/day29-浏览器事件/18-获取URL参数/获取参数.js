var params = location.search.substring(1)
console.log(params);
// 2. 利用=把字符串分割为数组 split('=');
var arr = params.split('=')
console.log(arr);
var div = document.querySelector('div')
div.innerHTML = arr[1] + '欢迎您'

var url = 'localhost:8080/index.html?name=zhangSan';
var params = '?name=zhangSan'
params = params.substring(1)
console.log(params);
var arr = params.split('=')
console.log(arr);
var obj = {}
obj[arr[0]] = arr[1]
console.log(obj);


