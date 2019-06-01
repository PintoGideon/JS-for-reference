const tweetList = document.getElementById('tweet-list');

eventListeners();

// Addin an Event Listenter

function eventListeners() {
	document.querySelector('#form').addEventListener('submit', newTweet);

	//Remove the tweet
	tweetList.addEventListener('click', removeTweet);

	//Documen onLoad
	document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

//Add New Tweet

function newTweet(e) {
	e.preventDefault();

	const tweet = document.getElementById('tweet').value;

	//Create a local storage

	const removeBtn = document.createElement('a');
	removeBtn.classList = 'remove-tweet';
	removeBtn.textContent = 'X';

	// Create an List element for each tweet
	const li = document.createElement('li');
	li.textContent = tweet;

	li.appendChild(removeBtn);

	tweetList.appendChild(li);

	addTweetLocalStorage(tweet);
}

function removeTweet(e) {
	if (e.target.classList.contains('remove-tweet')) {
		e.target.parentElement.remove();
	}

	removeTweetLocalStorage(e.target.parentElement.textContent);
}

// Add tweet to local Storage

function addTweetLocalStorage(tweet) {
	let tweets = getTweetsFromStorage();

	tweets.push(tweet);

	//Convert tweet array into string

	localStorage.setItem('tweets', JSON.stringify(tweets));
}

function getTweetsFromStorage() {
	let tweets;

	const localTweet = localStorage.getItem('tweets');

	//Get Values from Local Storage
	if (localTweet === null) {
		tweets = [];
	} else {
		tweets = JSON.parse(localTweet);
	}
	return tweets;
}

function localStorageOnLoad() {
	let tweets = getTweetsFromStorage();

	tweets.forEach(function(tweet) {
		const removeBtn = document.createElement('a');
		removeBtn.classList = 'remove-tweet';
		removeBtn.textContent = 'X';

		// Create an List element for each tweet
		const li = document.createElement('li');
		li.textContent = tweet;

		li.appendChild(removeBtn);

		tweetList.appendChild(li);
	});
}

//Remove tweet from Local Storage

function removeTweetLocalStorage(tweet) {
	let tweets = getTweetsFromStorage();

	//Remove 'X' from the tweet

	const tweetDelete = tweet.substring(0, tweet.length - 1);

	//Loop throught the tweets

	tweets.forEach((localTweet, index) => {
		if (tweetDelete === localTweet) {
			tweets.splice(index, 1);
		}
	});

	localStorage.setItem('tweets', JSON.stringify(tweets));
}
