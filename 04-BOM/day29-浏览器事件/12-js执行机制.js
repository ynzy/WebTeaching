console.log(1);

setTimeout(function () {
  console.log(3);
}, 1000);

console.log(2);


console.log(1);

setTimeout(function () {
  console.log(3);
}, 0);

console.log(2);


console.log(1);
function demo() {
  console.log(2);
}
demo()
setTimeout(function () { // 异步
  console.log(4);
})
function fn(cb) {
  console.log(5);
  cb()
  console.log(6);
}
fn(function () {
  console.log(7);
})
console.log(3);
