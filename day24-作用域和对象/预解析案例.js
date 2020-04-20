// var num = 10;
// fun();

// function fun() {
//   console.log(num);
//   var num = 20;
// }

// var num;
// function fun() { 
//   var num;
//   console.log(num);
//   num = 20;
// }
// num = 10;
// fun()

// var a = 18;
// f1();

// function f1() {
//   var b = 9;
//   console.log(a);
//   console.log(b);
//   var a = '123';
// }

// var a;
// a = 18;
// function f1() {
//   var b;
//   var a;
//   b = 9;
//   console.log(a);
//   console.log(b);
//   a = '123';
// }
// f1()

f1();
console.log(c);
console.log(b);
console.log(a);

function f1() {
  var a = b = c = 9;
  console.log(a);
  console.log(b);
  console.log(c);
}


// function f1() {
//   var a;
//   a = b = c = 9;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// f1()
// var a, b, c;
// console.log(c);
// console.log(b);
// console.log(a);


var b;
function fn() {
  b = 9
  console.log(b);
  var a;
  a = 10
  console.log(a);

}
fn()
console.log(b);
console.log(a);

