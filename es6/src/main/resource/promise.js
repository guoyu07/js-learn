
console.info("promise学习开始...")

let p = new Promise(function(resolve,reject){
	resolve();
	console.info("Promise执行了...")
});

//----- 当前脚本所有同步任务执行完才会执行
p.then(function(){
	console.info("回调...")
})
console.info("...")
setTimeout(function(){
	console.info("延时...")
},0)
console.info("最后...")

//----- Promise.all

let p1 = new Promise(function(resolve,reject){
	setTimeout(resolve,1000,"1")
})
let p2 = new Promise(function(resolve,reject){
	setTimeout(resolve,2000,"2")
})
let p3 = new Promise(function(resolve,reject){
	setTimeout(resolve,3000,"3")
})

let all = Promise.all([p1, p2, p3]);
all.then(function(value){
	console.info(value) //["1", "2", "3"]
})