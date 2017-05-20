//定义一个模块。

var canadianDollar = 0.91;

function roundTwoDecimals(amount){
	return Math.round(amount*100)/100;
}

exports.canadianToUs = function(canadian){
	//canadianToUs函数设定在exports模块中，所以别的文件只要引入这个模块就能使用它；
	return roundTwoDecimals(canadian*canadianDollar);
}

exports.UsToCanadian = function(us){
	return roundTwoDecimals(us/canadianDollar);
}

/*
	exports对象上设定了两个属性，canadianToUs和UsToCanadian;所以当这个模块被引入后只能使用这两个函数，
	而canadianDollar作为私有变量不会被程序直接访问。

	只需要使用require函数就可以引用模块，
	即在另一个文件中 var module1 = require("./路径／module-1.js")就可以使用模块中exports出来的
	属性和方法了。

*/
