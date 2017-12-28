
console.info("class学习开始...")

//----- es5 创建对象
/*function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);*/

//----- es6 的类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

console.info(typeof Point) //function
var p = new Point(1,2)
console.info(p.toString()) //(1, 2)
console.info(Point.prototype.constructor == Point) //true

//----- class表达式定义
let myClass = class {
	echo(info){
		console.info(info)
	}
}
new myClass().echo("aaa")

//----- 立即调用的类
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三"

//----- Class 的取值函数（getter）和存值函数（setter）
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'

//----- Class的静态方法
class Foo {

	static classMethod() {
		return 'hello';
	}
}

Foo.classMethod() // 'hello'

var foo = new Foo();
//foo.classMethod()
// TypeError: foo.classMethod is not a function

//----- extends

class Person{
	
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	
	toString(){
		return (this.name + "-" + this.age)
	}
}

class Police extends Person{
	constructor(name,age,salary){
		super(name,age) //必须调用
		this.salary = salary;
	}
	
	toString(){
		console.info(super.toString() + "-" + this.salary)
	}
}

let police = new Police("john",23,1000);
police.toString(); //john-23-1000
