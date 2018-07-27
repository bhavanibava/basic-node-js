var http=require('http');
var fun1=require('./nodew1.js');
http.createServer(function(req,res){
	//req.writeHead(200,{'content-type':'text/html'});
	res.write("another function calling...\n this content from another function:"+fun1.anotherfun());
	res.end('\n this is date function');
}).listen(8080);