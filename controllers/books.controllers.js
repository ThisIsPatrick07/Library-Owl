const shortid = require('shortid');
const Book = require('../models/book.models.js');

const getAllBooks = async (req, res) => {
	const allBooks = await Book.find();
	return res.status(200).json({
		allBooks : allBooks,
		success : true,
	});
};

const getBookById = async (req, res) => {
	const bookId = req.params.id;
	const book = await Book.findOne({ bookId : bookId });
	return res.status(200).json({
		book : book,
		success : true,
	});
};

const addNewBook = async (req, res) => {
	const book = req.body;
	const newBookId = shortid.generate();
	
	await Book.create({
		bookId : newBookId,
		name : book.name,
		author : book.author,
		publishedAt : Date.now(),
		genre : book.genre,
		summary : book.summary,
	});

	return res.status(201).json({
		msg : `Added ${book.name}, ID : ${newBookId}`,
		success : true,
	});
};

const deleteBook = async (req, res) => {
	const bookId = req.params.id;

	await Book.deleteOne({ bookId : bookId });

	return res.json({
		msg : `Deleted book of ID: ${bookId}`,
		success : true,
	});
};

module.exports = {
	getAllBooks,
	getBookById,
	addNewBook,
	deleteBook,
};