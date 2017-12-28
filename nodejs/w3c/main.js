var fs = require("fs");

var data = fs.readFileSync('main.txt');

console.log(data.toString());
console.log("程序执行结束!");

console.log("非阻塞。。。。。。");

fs.readFile('main.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");