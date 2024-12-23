const express = require('express');
const authorsController = require('../controllers/authors.controllers.js');

const router = express.Router();

router
.route('/')
	.get(authorsController.getAllAuthors)
	.post(authorsController.addNewAuthor)
;

router
.route('/:id')
	.get(authorsController.getAuthorById)
	.delete(authorsController.deleteAuthor)
;

module.exports = router;