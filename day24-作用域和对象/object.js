// var obj = {
//   name: '张三丰',
//   sex: '男',
//   age: '28',
//   height: '187'
// }


// var star = {
//   name: '张三丰',
//   sex: '男',
//   age: '28',
//   height: '187',
//   sing: function () {
//     console.log('唱歌');

//   }
// }
// // (1).调用对象的属性 我们采取 对象名.属性名 
// console.log(star.name)
// // (2). 调用属性还有一种方法 对象名['属性名']
// console.log(star['sex']);
// // (3) 调用对象的方法 sayHi   对象名.方法名() 千万别忘记添加小括号
// star.sing()


// var andy = new Object()
// andy.name = 'zhangsan'
// andy['sex'] = 'nan'
// andy.fn = function () { 
//   console.log(111);

// }

// console.log(andy);


var ldh = {
  uname: '刘德华',
  age: 55,
  sing: function () {
    console.log('冰雨');
  }
}
var zxy = {
  uname: '张学友',
  age: 58,
  sing: function () {
    console.log('李香兰');
  }
}

function Star(uname, age, sex) {
  console.log(this);

  this.uname = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function (songname) {
    // console.log(this.uname + '的歌曲：' + songname);

  }
}

var ldh = new Star('刘德华', null, 'nam')
ldh.sing('冰雨')
console.log(ldh);

// var zxy = new Star('张学友', 43, '男')
// zxy.sing('李香兰')
// console.log(zxy);

for (var k in ldh) {
  console.log(k + '----' + ldh[k]);

}