# management项目

## 1. axios封装
https://github.com/axios/axios

## 2. login流程
1. 登录页面
2. 登录校验
3. 登录请求
4. 登录响应

## 3. elementUI 增删改查

## 4. filters使用

## 5. 组件封装通讯

## 6. vue原型 Vue.prototype

## 7. 跨域
https://juejin.im/post/59c132415188256bb018e825
1. vue项目前台解决
打包上线需要和服务器部署在同一个服务器下
```js
// vue.config.js
proxy: { // 配置跨域
            '/api': {
                target: 'http://localhost:5000/api/',
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
```
2. 后台解决
```js
// 设置请求头 允许跨域
Access-Control-Allow-Origin
```
3. jsonp解决

4. CORS
复杂请求会有跨域问题，简单请求应该不会有跨域问题
```js
// Content-Type
// - text/plain
// - multipart/form-data
// - application/x-www-form-urlencoded
```

5. 服务器部署nginx转发
<!-- 后台服务和前台服务可以不是一台服务器 -->

## 8.webpack
<!-- 项目工程化用的 -->