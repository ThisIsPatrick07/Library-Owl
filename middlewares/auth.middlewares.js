const authService = require('../services/auth.services.js');

const checkForAuthentication = async (req, res, next) => {
	const userUid = req.cookies?.uid;
	let user;

	if(
		!userUid || 
		!(user = authService.getUser(userUid))
	){
		return next();
	}

	req.user = user;
	return next();
};

const restrictToRole = (roles) => {
	return (req, res, next) => {
		if(!req.user) return res.redirect('/users/login');
		
		if(!roles.includes(req.user.role))
			return res.status(403).json({
				msg : 'You are unauthorized to perform this action!',
				success : false,
			});

		return next();
	};
};

module.exports = {
	checkForAuthentication,
	restrictToRole,
};