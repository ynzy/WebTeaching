// function fn(a){
//   console.log(arguments);

//   console.log(a)
// }
// fn(1)

// () => {
//   // 函数执行方法
// }
// const fn1 = (a)=>{
//   // 注意：箭头函数中没有arguments
//   // console.log(arguments);
//   console.log(a);
// }
// fn1(1)

// function add(num1,num2){
//   return num1 + num2
// }
// console.log(add(1,2));

// const sum = (a,b) => {
//   return a+b
// }
// const sum = (a,b) => (a+b)
// console.log(sum(1,2));
// const fn = v => v
// console.log(fn(3));

// let obj = {
//   age:1
// }


// function fn1(){
//   return function(){
//     console.log('----');
//     console.log(this);
//   }
// }
// // fn1()()
// const fn2 = fn1.call(obj)
// fn2()

// function fn(){
//   console.log('----');
//   console.log(this);
//   return () => {
//     console.log('----');
//     console.log(this);
//   } 
// }
// // fn()
// const resFn = fn.call(obj)
// resFn()
// let obj = {
//   age:1
// }
// function fn(){
//   setTimeout(function(){
//     console.log(this);
//   })
// }
// fn.call(obj)

// function fn1(){
//   setTimeout(()=>{
//     console.log(this);
//   })
// }
// fn1.call(obj)


// var age = 100;

// var obj = {
// 	age: 20,
// 	say: () => {
// 		alert(this.age)
// 	}
// }

// obj.say();

