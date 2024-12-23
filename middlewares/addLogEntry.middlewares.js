const fs = require('fs');
const path = require('path');

const addTimeToReq = (req) => {
	req.requestTime = Date.now();
	return;
};

const getLogEntry = (req) => {
	return `${req.method} request -> Path : '${req.path}', From IP : ${req.ip}, Time : ${Date.now()}\n`;
};

const addLogEntry = (logFilePath) => {
	const resolvedLogFilePath = path.resolve(logFilePath);
	
	return (req, res, next) => {
		addTimeToReq(req);
		const logEntry = getLogEntry(req);

		fs.appendFile(
			resolvedLogFilePath,
			logEntry,
			(err, data) => {
				next();
			}
		);
	};
};

module.exports = { addLogEntry };