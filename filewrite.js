var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
fs.writeFile('file1.txt','welcome bhavani,this one new file\n',function(err){
	if(err) throw err;
	console.log('file saved');
});
	res.write("new file creation is finished\n");
	res.end();
}).listen(8080);