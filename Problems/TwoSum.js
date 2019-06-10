/**
 * Two Sum
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

function checkSum(array, targetSum) {
	//Loop through the array
	const map = {};

	for (let i = 0; i < array.length; i++) {
		const potentialMatch = target - nums[i];

		if (potentialMatch in map) {
			return [potentialMatch, i];
		} else map[i] = true;
	}
	return null;
}

checkSum([2, 7, 11, 15], 9);
