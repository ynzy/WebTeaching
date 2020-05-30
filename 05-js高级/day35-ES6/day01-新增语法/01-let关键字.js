		/*
			1. let关键字就是用来声明变量的
			2. 使用let关键字声明的变量具有块级作用域
			3. 在一个大括号中 使用let关键字声明的变量才具有块级作用域 var关键字是不具备这个特点的
			4. 防止循环变量变成全局变量
			5. 使用let关键字声明的变量没有变量提升
			6. 使用let关键字声明的变量具有暂时性死区特性
    */
    
    /* --------let关键字就是用来声明变量的-------- */
    // var a = 1;
    let a = 10;
    // console.log(a);
  /* --------使用let关键字声明的变量具有块级作用域-------- */
  if(true){
    let b = 20;
    // console.log(b);
    var d = 40;
    if(true) {
      let c = 30
      var d = 3
    }
    // console.log(c);
    // console.log(d);
  }
  // console.log(b);
  // console.log(d);


  /* -------防止循环变量变成全局变量--------- */
  // for(var i=0;i<3;i++){
    
  // }
  // console.log(i);
  // for(let j=0;j<3;j++){
   
    
  // }
  // console.log(j);

  /*-----使用let关键字声明的变量没有变量提升------*/
  // console.log(age);
  // var age
  // console.log(age1);
  // let age1
  
  /* -------使用let关键字声明的变量具有暂时性死区特性------- */
  var tmp=100;
  if(true){
    console.log(tmp);
    let tmp = 200;
  }