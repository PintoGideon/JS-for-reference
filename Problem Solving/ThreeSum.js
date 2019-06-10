function threeSum(array, target) {
	array.sort(a, b => a - b);

	const results = [];

	for (var i = 0; i < array.length - 1; i++) {
		let left = i + 1;
		let right = array.length - 1;

		while (left < right) {
			let currentSum = array[i] + left + right;

			if (currentSum == target) {
				results.push([array[i], array[left], array[right]]);
				left += 1;
				right -= 1;
            } 
            else if (currentSum < target) left += 1;
			else if (currentSum > target) right -= 1;
		}
	}
	return results;
}
