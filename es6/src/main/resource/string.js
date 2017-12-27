
console.info("字符串扩展学习开始...")

let s = "字";
console.info(s.length)

//----- 提供遍历器接口
for (let codePoint of 'foo') {
  console.log(codePoint)
}

//----- startsWith() endsWith() includes() 
//----- 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
let hello = 'Hello world!';

console.info(hello.startsWith('Hello')) // true
console.info(hello.startsWith('Hello',1)) // false
console.info(hello.endsWith('!')) // true
console.info(hello.includes('o')) // true

//----- repeat方法返回一个新字符串，表示将原字符串重复n次。
console.info('hello'.repeat(2)) //hellohello

//----- padStart() padEnd() 如果某个字符串不够指定长度，会在头部或尾部补全
console.info('x'.padStart(5, 'ab')) // 'ababx'
console.info('x'.padStart(4, 'ab')) // 'abax'
console.info('x'.padEnd(5, 'ab')) // 'xabab'
console.info('x'.padEnd(4, 'ab')) // 'xaba'

'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

//----- 模板字符串   模板字符串中嵌入变量，需要将变量名写在${}之中。
let before = 'i have a' 
				+ 'dream before';
let now = `i have a 
			dream now`
console.info(before) //i have adream before
console.info(now)  //i have a 
				  //	dream now 保留空格

let name = "john"
let word = `my name is ${name} and 2+3 = ${2+3}`
console.info(word) //my name is john and 2+3 = 5