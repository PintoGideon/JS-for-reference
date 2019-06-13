// Closest value=infinity

function closestValueInBST(target, tree) {
	return findClosestValueInBstHelper(tree, target, Math.pow(2, 53));
}

function findClosestValueInBstHelper(tree, target, closest) {
	if (tree == null) return closest;

	if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
		closest = tree.value;
	}

	if (target < tree.value) {
		return findClosestValueInBstHelper(tree.left, target, closest);
	} else if (target > tree.value) {
		return findClosestValueInBstHelper(tree.right, target, closest);
	} else return closest;
}
