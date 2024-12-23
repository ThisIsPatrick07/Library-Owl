const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	bookId : {
		type : String,
		required : true,
	},
	name : {
		type : String,
		required : true,
	},
	author : {
		type : String,
		required : true,
	},
	// author : {
	// 	type : mongoose.Schema.Types.ObjectId,
	// 	ref : 'Author',
	// 	required : true,
	// },
	publishedAt : {
		type : Number,
		required : true,
	},
	genre : {
		type : String,
		required : true,
	},
	summary : {
		type : String,
	},
}, { timestamps : true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;