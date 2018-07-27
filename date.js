var http=require('http');
var date=require('./datefun.js');
http.createServer(function(req,res){
	res.write("date:"+date.myDateTime());
	res.write(req.url);
	res.end();
	console.log("displayed date");
}).listen(8080);