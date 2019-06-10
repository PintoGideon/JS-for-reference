// Functions can always remember the variables that they could see at creation

// 1. One global variable per library

(function() {
	var name = 'James';

	function sayName() {
		console.log(name);
	}

	window.sayName = sayName;
})();

sayName(); //James


