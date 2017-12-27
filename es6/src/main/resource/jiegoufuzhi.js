console.info("解构赋值学习开始...")

//----- ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
//----- 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值

//----- 1 数组
let [a, b, c] = [1, 2, 3];
console.info(a)
console.info(b)
console.info(c)

let [d, e, ...f] = ['4'];
console.info(d) //4
console.info(e) //undefined
console.info(f) //[]

let [head, ...tail] = [1, 2, 3, 4];
console.info(head) // 1
console.info(tail) // [2, 3, 4]

let [g, [h], i] = [1, [2, 3], 4];
console.info(g) // 1
console.info(h) // 2
console.info(i) // 4

//-----默认值    右边严格等于undefined时，采用默认值  ===
let [j=true] = [];
console.info(j) //true

let [k = 1] = [undefined];
console.info(k) // 1

let [l = 1] = [null];
console.info(l) // null

//----- 2 对象   数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let {m,n} = {m:"1",n:"2"}
console.info(m)
console.info(n)

//----- 变量名和属性不一致
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.info(baz) // "aaa"

//----- 默认值
var {o: p = 3} = {o: 5};
console.info(p) // 5

//----- 3 字符串
let [q,r] = "1234";

console.info(q) // 1
console.info(r) // 2

//----- 4 函数的参数
function add([s,t]){
	console.info(s)
	console.info(t)
}
add([1,2])

//----- 5 用途
//----- 交换变量的值
let u = 1;
let v = 2;

[u, v] = [v, u];
console.info(u)
console.info(v)

//----- 函数返回多值
function example(){
	return ["1","2","3"]
}

let [w,x,y] = example();
console.info(w)
console.info(x)
console.info(y)

//----- 遍历map
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
