// 求多个数的累加和
function sum(a,b,...ages){
  // console.log(a,b);
  let sum = 0;
  sum += a + b
  for(let i=0;i<ages.length;i++){
    sum += ages[i]
  }

  return sum
}
console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));


let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1,...s2] = students
console.log(s1);
console.log(s2);
