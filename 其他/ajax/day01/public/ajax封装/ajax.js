function ajax(options) {
  // 创建ajax对象
  var xhr = new XMLHttpRequest();
  // 拼接请求参数的变量
  var params = '';
  /*
    {
      name: 'zhangsan',
      age: 20
    }
    name=zhangsan&age=20
  */
  // 循环用户传递进来的对象格式参数
  for (var attr in options.data) {
    // 将参数转换为字符串格式
    params += attr + '=' + options.data[attr] + '&'
  }
  // 将参数最后面的&截取掉
  params = params.substr(0, params.length - 1)
  console.log(params);

  // 判断请求方式
  if (options.type == 'get') {
    options.url = options.url + '?' + params
  }

  // 配置ajax对象
  xhr.open(options.type, options.url)
  // 发送请求
  // 如果请求方式为post
  if (options.type == 'post') {
    // 用户希望的项服务器端传递的请求参数的类型
    var contentType = options.header['Content-Type']
    // 设置请求参数格式的类型
    xhr.setRequestHeader('Content-Type', contentType)
    // 判断用户希望的请求参数格式的类型
    // 如果类型为json
    if (contentType == 'application/json') {
      // 向服务器端传递json数据格式的参数
      xhr.send(JSON.stringify(options.data))
    } else {
      // 向服务器端传递普通类型的请求参数 
      xhr.send(params)
    }
  } else {
    xhr.send()
  }
  // 监听xhr对象下面的onload事件
  // 当xhr对象接收完相应数据后触发
  xhr.onload = function () {
    options.success(xhr.response)
  }
}