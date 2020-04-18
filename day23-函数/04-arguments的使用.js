function sum() {
  console.log(arguments);
  // console.log(arguments.length);
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    sum += arguments[i]
  }
  return sum
}
// var result = sum(1, 2)
var result = sum(1, 2, 3, 4, 5, 6, 7)
console.log(result);

