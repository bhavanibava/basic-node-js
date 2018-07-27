var express=require('express');
var app=express();
app.get('/',function(req,res){
	res.send("welcome bava");
});
app.listen(3000);