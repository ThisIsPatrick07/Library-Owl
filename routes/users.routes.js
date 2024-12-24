const express = require('express');
const usersController = require('../controllers/users.controllers.js');
const router = express.Router();

router
.route('/')
	.get(usersController.getAllUsers)
;

router
.route('/signup')
	.get((req, res) => {
		return res.render('signup');
	})
	.post(usersController.addNewUser)
;

router
.route('/login')
	.get((req, res) => {
		return res.render('login');
	})
	.post(usersController.handleUserLogin)
;

router
.route('/:id')
	.get(usersController.getUserById)
	.delete(usersController.deleteUser)
;

module.exports = router;