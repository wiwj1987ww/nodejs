var net = require('net');

var server = net.createServer(function(socket){
	console.log('client connected');
	socket.on('data',function(data){
		socket.write(data);
	});
});
server.listen(8888,function(){
	console.log('server,bound');
});


//事件监听一个事件
// var server = net.createServer(function(socket){
// 	socket.once('data',function(data){
// 		socket.write(data);
// 	});
// });
// server.listen(8888);