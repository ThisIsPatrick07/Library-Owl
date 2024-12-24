const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

class AuthService {	

	setUser(user){
		const payload = {
			userId : user.userId,
			name : user.name,
			gender : user.gender,
			role : user.role,
			email : user.email,
			password : user.password,
		};
		
		try {
			const token =  jwt.sign(payload, secretKey); // create the signed token
			return token;
		} catch (error) {
			console.error('Error while trying to create token for user!', error.message);
		}
	}
	
	getUser(token){
		let payload;

		try {
			if(!token){
				payload = null;
			} else {
				payload = jwt.verify(token, secretKey); // verify the token and return the user
			}
			return payload;				
		} catch (error) {

			console.error('Error while trying to verify user token!', error.message);
		}
	}
}

const authService = new AuthService();
module.exports = authService;