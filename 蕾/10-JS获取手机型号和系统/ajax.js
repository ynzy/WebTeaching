
var phone = '1234555555'
function login(phone) {
  // 前台加密
  phone = jami(phone)  //加密过的手机号
  $.ajax({
    //请求方式
    type: "POST",
    //请求的媒体类型
    contentType: "application/json;charset=UTF-8",
    //请求地址
    url: "http://127.0.0.1/admin/list/",
    //数据，json字符串
    data: JSON.stringify(phone),  //入参  传入参数
    //请求成功
    success: function (result) { //出参 接口返回结果 
      // 返回给你手机号是没有加密
      // 后端没有加密
      // 想让你在出参时候加密
      // 在这里加密
      console.log(result);
    },
    //请求失败，包含具体的错误信息
    error: function (e) {
      console.log(e.status);
      console.log(e.responseText);
    }
  });
}

function jami(phone) {
  return phone
}