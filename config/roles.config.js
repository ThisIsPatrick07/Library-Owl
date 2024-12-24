const roles = {
	ADMIN : 'admin',
	NORMAL : 'normal',
	AUTHOR : 'author',
};

const regularUsers = Object.values(roles).filter(role => role != roles.ADMIN);

const roleGroups = {
	REGULAR_USERS : regularUsers,
};

module.exports = {
	roles,
	roleGroups,
};