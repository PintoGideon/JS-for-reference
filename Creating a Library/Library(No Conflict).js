window.sandwichLibrary = 'A library of books about sandwiches';

// Creating a library

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

	if (librarySystem !== 'undefined') {
		librarySytem('sandwichLibrary', function() {
			return sandwichLibrary;
		});
	} else {

        // Storing the string value 
		var oldsandwichLibrary = window.sandwichLibrary;


		sandwichLibrary.noConflict = function() {
            window.sandwichLibrary = oldsandwichLibrary;
            
            // The sandwichLibrary can be accessed due to closure
            return sandwichLibrary;
		};

		window.sandwichLibrary = sandwichLibrary;
	}
})();

// We need to reset window.sandwich library to the original value.

//.noConflict will also return the sandwichLibrary object.

var sandwichJS = sandwichLibrary.noConflict();

// You want to print window.sandwich library

console.log(sandwichLibrary);

//We can still use SandwichJS
