var connect = require('connect');
var router = require('./middleware/router');//路由器组件

var routes = {
	//定义路由的对象

	GET:{
		'/users':function(req,res){
			res.end('rob,loki,ferret');
		};
		'/user/:id':function(req,res,id){
			//其中的每一项都是对请求URL的映射，并包含要调用的回调函数
			res.end('user'+id);
		}
	},
	DELETE:{
		'/user/:id':function(req,res,id){
			res.end('deleted user'+id);
		}
	}
};

connect().use(router(routes))//将路由对象传给路由器的setup函数
		 .listen(3000);