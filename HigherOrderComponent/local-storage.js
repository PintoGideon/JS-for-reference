let subscribers = [];

export const get = (key, default_) =>
	JSON.parse(localStorage.getItem(key) || JSON.stringify(default_));

export const subscribe = fn => {
	subscribers.push(fn);
	const unsubscribe = () => {
		subscribers.filter(s => s !== fn);
	};
	return unsubscribe;
};

export const set = (key, value) => {
	localStorage.setItem(key, value);
	subscribers.forEach(s => s());
};
