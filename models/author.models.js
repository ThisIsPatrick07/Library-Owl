const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
	authorId : {
		type : String,
		required : true,
	},
	name : {
		type : String,
		required : true,
	},
	gender : {
		type : String,
	},
}, { timestamps : true });

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;