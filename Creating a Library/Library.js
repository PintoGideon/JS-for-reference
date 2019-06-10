//Constructors

function Person(name) {
	this.name = name;
	this.address = '123 Amory Park';
}

new Person('Gordon');

//IIFE

(function sayHi() {
	console.log('hi');
})();

// How to expose content in an IIFE or create a library

(function() {
	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var fillings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: fillings
	};

	this.sandwichLibrary = sandwichLibrary;
})(this);

sandwichLibrary.breads.wheat; //'The healthy option






// The downside of this is what if we have multiple libraries, we might end up in a confict on the global variable.
// 2. The next approach uses one global variable
//    a. Create: librarySystem('libraryName',function(){/* return library */})
//    b. Use: librarySystem('libraryName');

(function() {
	var libraryStorage = {};

	function librarySystem(libraryName, callback) {
		if (arguments.length > 1) {
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStorage[libraryName];
		}
	}

	window.librarySystem = librarySystem;
})();

librarySystem('sandwichLibrary', function() {
	var breads = {
		wheat: 'The healthy option',
		white: 'The unhealthy option'
	};

	var fillings = {
		turkey: 'For boring sandwiches',
		cheese: 'For the vegetarians'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: fillings
	};

	return sandwichLibrary;
});

librarySytem('sandwichLibrary'); // {breads:breads, fillings:fillings}














