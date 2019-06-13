function fibonacci(n) {
	if (n == 2) return 1;
	if (n == 1) return 0;
	else return fibonacci(n - 1) + fibonacci(n - 2);
}

/* Iterative */

function getNthFib(n) {
	var lastTwo = [0, 1];
	counter = 3;

	while (counter <= n) {
		var nextFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nextFib;
		counter++;
	}

	if (n > 1) return lastTwo[1];
	else lastTwo[0];
}
