console.info("Set和Map学习开始...")

//----- 数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

const a = new Set();
a.add("1");
a.add("2");
a.add("1");
a.add("3");

for(let i of a){
	console.info(i) //1 2 3
}

const b = new Set([1, 2, 3, 4, 4]);
console.info(...b)

console.info(b.size)
console.info(b.has(1))
console.info(b.has("1"))
console.info(b.delete(2)) //true success   false fail
b.clear()
console.info(b.size)

//----- Array.from 将Set转为数组
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

//----- 遍历  Set的遍历顺序就是插入顺序
const set = new Set([1, 2, 3, 4, 5]);

for (let item of set.keys()) {
	console.info(item);
}

for (let item of set.values()) {
	console.info(item);
}

for (let item of set.entries()) {
	console.info(item);
}

set.forEach((value, key) => console.log(key + ' : ' + value))

//----- 应用
/*
 * 	
 * 	let set = new Set(['red', 'green', 'blue']);
	let arr = [...set];
 	['red', 'green', 'blue']
 * 
 * 
 * 
 */

//----- Map  Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
