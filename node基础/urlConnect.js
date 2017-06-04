var path = url.parse(req.url).pathname;

function rewrite(req,res,next){
	var match = path.match(/^\/blog\/posts\/(. +)/);
	if(match){ //只针对/blog/posts请求执行查找
		findPostIdBySlug(match[1],function(err,id){
			if (err) return next(err);
			if (!id) return next(new Error('User not found'));
			req.url = '/blog/posts/'+id;
			next();
		});
	}else{
		next();
	}
}