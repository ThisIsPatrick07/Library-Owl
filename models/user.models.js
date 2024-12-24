const mongoose = require('mongoose');
const roles = require('../config/roles.config.js');
const { genders } = require('../config/enums.config.js');

const roleValues = Object.values(roles);
const genderValues = Object.values(genders);

const userSchema = new mongoose.Schema({
	userId : {
		type : String,
		required : true,
	},
	name : {
		type : String,
		required : true,
	},
	gender : {
		type : String,
		enum : genderValues,
	},
	role : {
		type : String,
		enum : roleValues,
	},
	email : {
		type : String,
		required : true,
		unique : true,
	},
	password : {
		type : String,
		required : true,
	},
}, { timestamps : true });

const User = mongoose.model('User', userSchema);
module.exports = User;