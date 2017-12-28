console.info("函数扩展学习开始...")

//----- 参数默认值
function add(a,b = 1){
	console.info(a + b)
}
add(2,3) //5
add(2) //3

//----- rest参数 获取参数的剩余参数

function sum(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  console.info(sum);
}

sum(2, 5, 3) // 10

//------ 箭头函数 =>
var a = v => console.info(v)
f(3)

/*var b = () => 5;
// 等同于
var b = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
  return num1 + num2;
};*/