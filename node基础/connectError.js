function errorHandler(){
	var env = process.env.NODE_ENV || 'development';
	return function(err,req,res,next){
		//错误处理中间件定义四个参数
		res.statusCode = 500;
		switch(env){
			case 'development':
				res.setHeader('Content-Type':'application/json');
				res.end(JSON.stringify(err));
				break;
			default:
			res.end("Server error");
		}
	}
}