/*
Implement an algorithm to determine if a string has all unique characters. What if
you can not use additional data structures? */

function isUnique(string) {
	var stringArray = string.split('');
	var charMap = {};

	for (var element of stringArray) {
		if (charMap[element]) {
			charMap[element]++;
			return false;
		} else {
			charMap[element] = 1;
		}
	}
	return true;
}

isUnique('Gideon');

