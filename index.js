var asyncModule1 = require("./asyncModule1"),
	asyncModule2 = require("./asyncModule2"),
	asyncModule3 = require("./asyncModule3");

console.log(asyncModule1.mssg); // undefined
asyncModule2(console.log); // undefined
asyncModule3(console.log); // hello world
