const preprocessUserInfoForCreation = (user) => {
	return {
		...user,
		gender : (user.gender).toLowerCase(),
		role : (user.role).toLowerCase(),
	};
}

module.exports = {
	preprocessUserInfoForCreation,
};