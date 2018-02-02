var util = require('util')
var events = require('events')
var fs = require("fs");

console.log( __filename );

console.log( __dirname );

console.info('---process')
console.info(process.argv)


console.info('---util')
console.info(util)

console.info('---events')
var emitter = new events.EventEmitter();

//事件监听器
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});
//触发
emitter.emit('someEvent', 'byvoid', 1991);

console.info('---fs')

var data = fs.readFileSync('main.txt');
console.log(data.toString());
console.log("程序执行结束!");

console.log("非阻塞。。。。。。");

fs.readFile('main.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");