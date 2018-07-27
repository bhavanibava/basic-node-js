var mongoclient=require('mongodb');
var url="mongodb://localhost:27017/";
mongoclient.connect(url,function(err,db){
	if(err) throw err;
	var dbobject=db.db("mydb");
	var mydata={name:"bhavani",age:21,add:"srk,uthukottai"};
	dbobject.collection("bava").insertOne(mydata,function(err,res){
		if(err) throw err;
		console.log("one document is inserted");
		db.close();
	});
});