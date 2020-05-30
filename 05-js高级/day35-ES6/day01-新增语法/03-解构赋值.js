 // 数组解构允许我们按照一一对应的关系从数组中提取值 然后将值赋值给变量
 let arr = [1,2,3,4]

 let [a,b,c,d,e] = [1,2,3,4]
/*  console.log(a);
 console.log(b);
 console.log(c);
 console.log(d);
 console.log(e);
  */
 //如果解构不成功，变量的值为undefined

 let person = {
   name: '张三',
   age: 14
 }
//  console.log(person.name);
 let {name,age} = person
 let {name:myName,age:myAge} = person
 console.log(name);
 console.log(age);
 console.log(myName,myAge);
 
 