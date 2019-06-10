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

    var sandwichLibrary={
        breads:breads,
        fillings:fillings
    }
    
    this.sandwichLibrary=sandwichLibrary;
})(this);


sandwichLibrary.breads.wheat; //'The healthy option




