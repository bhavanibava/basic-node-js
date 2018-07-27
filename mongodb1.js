var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";
mongoclient.connect(url,function(err,db){
	if(err) throw err;
	var database=db.db("mydb");
	database.createCollection("bava",function(err,res){
		if(err) throw err;
		console.log("one collection is created");
		db.close();
	});
});