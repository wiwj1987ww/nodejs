//可配置的中间件
//为了向开发者提供可配置的能力，中间件通常遵循一个简单的惯例：用函数返回另一个函数（通常称为闭包）

function setup(options){
	//设置逻辑
	// 在这里做中间件初始化
	return function(req,res,next){
		//中间件逻辑
		//即使被外部函数返回了，仍然可以访问options
	}
}

//用法 app.use(setup({some:'options'})) 在use中调用了setup函数