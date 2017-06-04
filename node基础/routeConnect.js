var parse = require('url').parse;
module.exports = function route(obj){
	return function(req,res,next){
		//检查以确保req.mothod定义了
		if(!obj[req.mothod]){
			next();
			return;//如果未定义，调用next，并停止一切后续操作
		}
		// 查找req.method对应的路径
		var routes = obj[req.mothod];
		var url = parse(req.url) //解析URL，以便pathname匹配

		var paths = Object.keys(routes)//将req.method对象的路径存放到数组中

		for (var i = 0; i < pahts.length; i++) {
			var path=pahts[i];
			var fn = routes[path];
			path = path.replace(/\//g,'\\/').replace(/:(\w+)/g,'([^\\/]+)');
			var re = new RegExp('^'+path+'$');
			var captures = url.pathname.match(re)
			if (captures) {
				var args = [req,res].concat(captures.slice(1));
				fn.apply(null,args);
				return; 
			}
		}
		next();
	}
};