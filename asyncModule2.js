var mssg;

// simulating an async operation
setTimeout(function() {
	mssg = "hello world";
}, 1000);

// async operation is NOT part of exports
module.exports = function(callback) {
	callback(mssg);
};