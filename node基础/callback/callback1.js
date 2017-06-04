var http = require('http');
var fs = require('fs');

//减少嵌套

var server = http.createServer(function(req,res){
	getTitles(res);
}).listen(8000,'127.0.0.1');

function getTitles(res){
	//node异步回调通常设置2个参数，第一个用来放置可能会发生的错误，第二个放结果
	fs.readFile('./title.json',function(err,data){
		if (err) {
			hadError(err,res);
		}else{
			getTemplate(JSON.parse(data.toString()),res);
		}
	});
}

function getTemplate(titles,res){
	fs.readFile('./template.html',function(err,data){
		if (err) {
			hadError(err,res);
		}else{
			formatHtml(titles,data.toString(),res);
		}
	})
}

function formatHtml(titles,tmpl,res){
	var html = tmpl.replace('%',titles.join('</li><li>'));
	res.writeHead(200,{'Content-Type':"text/html"});
	res.end(html);
}

function hadError(err,res){
	console.log(err);
	res.end('Server Error');
}