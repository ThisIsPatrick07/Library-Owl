const shortid = require('shortid');
const Author = require('../models/author.models.js');

const getAllAuthors = async (req, res) => {
	const allAuthors = await Author.find();

	return res.status(200).json({
		allAuthors : allAuthors,
		success : true,
	});
};

const getAuthorById = async (req, res) => {
	const authorId = req.params.id;
	const author = await Author.findOne({ authorId : authorId });
	
	return res.status(200).json({
		author : author,
		success : true,
	});
};

const deleteAuthor = async (req, res) => {
	const authorId = req.params.id;
	await Author.deleteOne({ authorId : authorId });

	return res.json({
		msg : `Successfully deleted author of ID : ${authorId}`,
		success : true,
	});
};

const addNewAuthor = async (req, res) => {
	const author = req.body;
	const newAuthorId = shortid.generate();
	
	await Author.create({
		authorId : newAuthorId,
		name : author.name,
		gender : author.gender,
	});
	
	return res.status(201).json({
		msg : `Added ${author.name}, ID : ${newAuthorId}`,
		success : true,
	});
};

module.exports = {
	getAllAuthors,
	getAuthorById,
	deleteAuthor,
	addNewAuthor,
};