const multiplyBy2 = x => x * 2;

const add3 = x => x + 3;

const divideBy5 = x => x / 5;

const reduce = (array, howToCombine, buildingup) => {
	for (let i = 0; i < array.length; i++) {
		buildingup = howToCombine(buildingup, array[i]);
	}
	return buildingup;
};

const runFunctionOnInput = (input, fn) => {
	return fn(input);
};

const output = reduce([multiplyBy2, add3, divideBy5], runFunctionOnInput, []);
