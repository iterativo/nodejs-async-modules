var mssg;

// simulating an async operation
setTimeout(function() {
	mssg = "hello world";
}, 1000);

// async operation IS part of the exports
module.exports = function(callback) {
	// simulating an async operation
	setTimeout(function() {
		mssg = "hello world";
		callback(mssg); // perform callback upon async operation completion
	}, 1000);
};