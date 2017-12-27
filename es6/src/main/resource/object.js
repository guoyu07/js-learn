console.info("对象扩展学习开始...")

//------ ES6 允许直接写入变量和函数，作为对象的属性和方法。 属性名为变量名, 属性值为变量的值。
var user = {
	name:"lalala",
	age:23,
	address:"china",
	show:function(){
		console.info(name,age,address)
	}
}

let name = "lalala"
let age = 23
let address = "china"

let userNow = {
	name,
	age,
	address,
	show(){
		console.info(name,age,address)
	}

}
console.info(userNow)
userNow.show();

//----- Object.is(,) 同值相等
console.info(+0 === -0) //true
console.info(NaN === NaN) // false

console.info(Object.is(+0, -0)) // false
console.info(Object.is(NaN, NaN)) // true

//----- Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.info(target) // {a:1, b:2, c:3}

//----- 属性的遍历
function User(name,age,address){
	this.name = name;
	this.age = age;
	this.address = address;
}
/*（1）for...in
	for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
（2）Object.keys(obj)
	Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
（3）Object.getOwnPropertyNames(obj)
	Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
（4）Object.getOwnPropertySymbols(obj)
	Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
（5）Reflect.ownKeys(obj)
	Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。*/

let u = new User();

User.prototype.sex = "";

for(name in u){
	console.info(name)
}
console.info(Object.keys(u))
console.info(Object.getOwnPropertyNames(u))
console.info(Object.getOwnPropertySymbols(u))
console.info(Reflect.ownKeys(u))

