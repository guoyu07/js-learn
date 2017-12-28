
let test = "let学习开始...";
console.info(test)

//-----1 用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效

{
	let a = 10;
	var b = 20
}

//console.info(a) Uncaught ReferenceError: a is not defined
console.info(b) //20


//----- 2 for循环的计数器，就很合适使用let命令。

for(var i = 0; i < 10; i++){
	
	
}
console.info(i) //10

for(let j = 0; j < 10; j++){
	
	
}
//console.info(j) Uncaught ReferenceError: j is not defined

//----- 3 var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。

console.info(c) // undefined
//console.info(d) Uncaught ReferenceError: d is not defined

var c = 3;
let d = 4;

//----- 4 块级作用域   es5 只有全局和函数作用域
{
	console.info("es6的块级作用域")
}

(function(){
	console.info("es5的块级作用域")
}())

//----- 5 const声明一个只读的常量。一旦声明，常量的值就不能改变     其他与let相似
const testConst = "const学习开始...";
console.info(testConst)

// testConst = "修改"; Uncaught TypeError: Assignment to constant variable.

