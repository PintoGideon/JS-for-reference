/******** Any Library  *************/

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
		this.sandwichLibrary = sandwichLibrary;
	}
})(this);
