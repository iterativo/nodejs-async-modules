var mssg;

// simulating an async operation
setTimeout(function(){
	mssg = "hello world";
}, 1000);

module.exports = {
	mssg: mssg
};