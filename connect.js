//创建一个connect
var connect = require('connect');
var app = connect();



//定义一个中间件
function logger(req,res,next){
  console.log('%s %s',req.method,req.url);
  next();
}
//定义另一个中间件
function hello(req,res){
  res.setHeader('Connect-Type'，'text/plain');
  res.end('hello world');
}

//使用use把中间件传给connect
app.use(logger);//通过next将控制权交给下一个中间件
app.use(hello);//没有定义next，而是结束响应

//中间件的顺序很重要

app.listen(3000);
