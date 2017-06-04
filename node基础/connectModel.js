function setup(fomat){
	//setup函数可以用不同的配置调用多次

	var regexp = /:(\w+)/g; //logger组件用正则表达式匹配请求属性

	return function logger(req,res,next){
		//connect使用的真实logger组件
		var str = format.replace(regexp,function(match,property){
			return req[property];
		});
		console.log(str);
		next();
	}
}

module.export = setup;