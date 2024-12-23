const mongoose = require('mongoose');


const connectDB = async () => {
	try {
		const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Library-Owl-DB';
		mongoose.connect(MONGO_URI);
		console.log(`MongoDB connected successfully!`);
		
	} catch (error) {
		console.error('Error while connecting to mongodb: ', error.message);
	}
};

module.exports = connectDB;