
console.info("generator学习开始...")

function* g1(){
	console.info(".")
	yield 1+2;
	console.info("..")
	yield 2+3;
	console.info("...")
	yield 3+4;
	console.info("....")
	return "over";
}

let g11 = g1();
console.info(".....")
console.info(g11.next()) //{value: 3, done: false}
console.info(g11.next()) //{value: 5, done: false}
console.info(g11.next()) //{value: 7, done: false}
console.info(g11.next()) //{value: "over", done: true}
console.info(g11.next()) //{value: undefined, done: true}

//----- next()参数
function* dataConsumer() {
  console.log('Started');
  console.log(`1. ${yield}`);
  console.log(`2. ${yield}`);
  return 'result';
}

let genObj = dataConsumer();
console.log(genObj.next());
// Started
console.log(genObj.next('a'))
// 1. a
console.log(genObj.next('b'))
// 2. b