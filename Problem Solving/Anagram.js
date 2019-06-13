function anagrams(string1, string2) {
	const aCharMap = buildCharmap(string1);
	const bCharMap = buildCharmap(string2);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
		return false;

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			return false;
		}
	}
	return true;
}

function buildCharmap(string) {
	const charMap = {};

	//Clean the string of white spaces
	const cleanedString = string
		.replace(/[^\w]/g, '')
		.toLowerCase()
		.split('');

	for (let letter of cleanedString) {
		if (charMap[letter]) {
			charMap[letter]++;
		} else {
			charMap[letter] = 1;
		}
	}
	return charMap;
}
