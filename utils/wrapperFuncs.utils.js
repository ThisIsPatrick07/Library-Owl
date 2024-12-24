const defaultErrorMsg = 'Something went Wrong :(';
const defaultErrorCb = () => {};

const trycatchWrapper = (func, errCb = defaultErrorCb, errorMessage = defaultErrorMsg) => {
	
	// the ...args basically intakes any arguments that this function gets and passes it onto our child function
	return async (...args) => { 
		try {
			const result = await func(...args);
			return result;
		} catch (error) {
			console.error(errorMessage, error.message);
			errCb(error, ...args);
		}
	};
};

module.exports = {
	trycatchWrapper,
};