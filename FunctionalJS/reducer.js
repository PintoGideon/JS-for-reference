const summed = reducer([1, 2, 3], add, 0);

const reducer = (array, combine, accumulator) => {
	const output = [];

	for (let i = 0; i < array.length; i++) {
		accumulator = output.push(accumulator, array[i]);
	}
	return output;
};

const add = (a, b) => a + b;
