var http = require('http');
var url = require('url');
//用一个常规的javascript数组存放数据
var items = [];

var server = http.createServer(function(req,res){
	//req.method是请求所用的http方法
	switch(req.method){
		case 'POST':
		var item = '';//为进来的事项进行字符串缓存
		req.setEncoding('utf8');//将进来的buffer格式的data事件编码设置为utf-8
		req.on('data',function(chunk){
			item+=chunk;//将数据块拼接到缓存上
		});
		req.on('end',function(){
			items.push(item);
			res.end('OK\n');
		});
		break;

		case 'GET':
		items.forEach(function(item,i){
			res.write(i+')'+item+'\n');
		});
		res.end();
		break;

		case 'DELETE':
		var path = url.parse(req.url).pathname;
		var i = parseInt(path.slice(1),10);

		if (isNaN(i)) {
			res.statusCode=400;
			res.end('Invailid item id');
		}else if(!item[i]){
			res.statusCode=404;
			res.end('Item not found');
		}else{
			items.splice(i,1);
			res.end('OK\n');
		}
		break;
	}
});

















