var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var User=new Schema({
	firstName:{
			type: String,
			index: true
	},
	lastName:{
			type: String,
			index:true
	},
	dob:{
		type:Date,
		default:Date.now
	}
});
module.exports=mongoose.model('User',User);