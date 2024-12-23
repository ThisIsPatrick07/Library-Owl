const express = require('express');
const booksController = require('../controllers/books.controllers.js');

const router = express.Router();

router
.route('/')
	.get(booksController.getAllBooks)
	.post(booksController.addNewBook)
;

router
.route('/:id')
	.get(booksController.getBookById)
	.delete(booksController.deleteBook)
;

module.exports = router;