// function fn1() {
//   // var num = 10;
//   function fn2() {

//     console.log(num);

//   }
//   fn2()
// }
// var num = 20;
// fn1()
// // console.log(num);


var a = 1;
function fn1() {
  var a = 2;
  var b = '22';
  fn2();
  function fn2() {
    var a = 3;
    fn3();
    function fn3() {
      var a = 4;
      console.log(a); //a的值 ?
      console.log(b); //b的值 ?
    }
  }
}
fn1();