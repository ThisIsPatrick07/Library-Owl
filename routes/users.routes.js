const express = require('express');
const usersController = require('../controllers/users.controllers.js');
const User = require('../models/user.models.js');
const authService = require('../services/auth.services.js');

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
	.post(async (req, res) => {
		const creds = req.body;
		
		try {
			const user = await User.findOne({
				email : creds.email,
				password : creds.password,
			});
	
			if(!user){
				return res.render('login', {
					error : 'Invalid User Credentials!',
				});
			}
	
			const token = authService.setUser(user);
			res.cookie('uid', token);
			return res.redirect('/');

		} catch (error) {
			console.error('Error while trying to login!: ', error.message);
			return res.json({ err : error.message });
		}
	})
;

router
.route('/:id')
	.get(usersController.getUserById)
	.delete(usersController.deleteUser)
;

module.exports = router;