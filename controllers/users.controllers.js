const shortid = require('shortid');
const User = require('../models/user.models.js');
const { roles } = require('../config/roles.config.js');

const getAllUsers = async (req, res) => {
	const allUsers = await User.find();

	return res.status(200).json({
		allUsers : allUsers,
		success : true,
	});
};

const getUserById = async (req, res) => {
	const userId = req.params.id;
	const user = await User.findOne({ userId : userId });
	
	return res.status(200).json({
		user : user,
		success : true,
	});
};

const deleteUser = async (req, res) => {
	const userId = req.params.id;

	try {
		await User.deleteOne({ userId : userId });

	} catch (error) {
		console.error(error.message);
		return res.render('signup', {
			error : 'Error while signing up!',
			msg : error.messsage,
		});
	}

	return res.json({
		msg : `Successfully deleted user of ID : ${userId}`,
		success : true,
	});
};

const addNewUser = async (req, res) => {
	const user = req.body;
	const newUserId = shortid.generate();
	
	await User.create({
		userId : newUserId,
		name : user.name,
		gender : (user.gender).toLowerCase(),
		role : (user.role).toLowerCase(),
		email : user.email,
		password : user.password,
	});
	
	return res.render('login', {
		msg : 'You\'re part of the party now! Come over!',
	});
};

// const handleUserLogin;

module.exports = {
	getAllUsers,
	getUserById,
	deleteUser,
	addNewUser,
};