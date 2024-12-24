const express = require('express');
const authService = require('../services/auth.services');
const router = express.Router();

router
.route('/')
	.get((req, res) => {
		if(!req.user)
			return res.render('home');

		return res.render('home', {
			nameOfUser : req.user.name,
		});
	})
;

module.exports = router;