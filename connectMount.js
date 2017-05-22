//挂载：这是一个简单而强大的组织工具，可以给中间件或整个程序定义一个路径前缀。
var connect = require('connect');
connect()
  .use(logger)
  .use('/admin',restrict)
  //当.use()的第一个参数是个字符串时，只有URL前缀与之匹配时，connect才会调用后面的中间件
  .use('/admin',admin)
  .use(hello)
  .listen(3000);


function restrict(req,res,next){
  var authorization = req.headers.authorization;
  if(!authorization) return next(new Error('Unauthorized'));
  var parts = authorization.split(' ');
  var scheme = parts[0];
  var auth =new BUffer(parts[1],'base64').toString().split(':');
  var user = auth[0];
  var pass = auth[1];
  authenticateWithDatabase(user,pass,function(err){
  //根据数据库中的记录检查信息的函数
    if(err) return next(err); //告诉分析器出错了
    
    //用error做参数的next()
    
    next(); //如果认证信息有效，不带参数调用next()
  });
}

function admin(req,res,next){
  switch(req.url){
    case '/':
      res.end('try /users');
      break;
    case '/users':
      res.setHeader('Content-Type','application/json');
      res.end(JSON.stringify(['tobi','loki','jane']));
      break;
   }
}
