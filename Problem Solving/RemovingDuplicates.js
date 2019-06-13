function removeDuplicates(array) {
	var charMap = {};

	for (var i = 0; i < array.length; i++) {
		if (charMap[array[i]]) {
			array.splice(i, 1);
		} else {
			charMap[array[i]] = 1;
		}
	}
	return array.length;
}

// Alternate method

function removeDuplicates(array) {
	var filteredArray = array.filter(
		(index, item) => array.indexOf(item) === index
	);

    return filteredArray.length;
}
