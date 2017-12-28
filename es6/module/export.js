
console.info("export学习开始...")

//----- 外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量

export var a = "1";
export var b = "2";

let c = "3";
let d = "4";

export {c,d}

export function e(){
	console.info("e....")
}

let f = "5";
export{f as five}



