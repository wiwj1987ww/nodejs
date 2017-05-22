//挂载：这是一个简单而强大的组织工具，可以给中间件或整个程序定义一个路径前缀。
var connect = require('connect');
connect()
  .use(logger)
  .use('/admin',restrict)
  //当.use()的第一个参数是个字符串时，只有URL前缀与之匹配时，connect才会调用后面的中间件
  .use('/admin',admin)
  .use(hello)
  .listen(3000);
