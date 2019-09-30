// Small Exercises
// Stopwatch
// Create a simple stopwatch app that starts the timer and shows the stopped time.
// Start the stopwatch with a promise
// End the stopwatch on a random time between 1-10 seconds
// When the stopwatch stops, display the time it took

//Get variable with random number
var timer = Math.floor(Math.random() * (+10 - +1)) + +1; 

//Create promise. Promise will not resolve until timer runs out
var stopWatch = new Promise(function(resolve, reject) {
    setTimeout(function() {
    resolve(timer);
    }, timer*1000);
});

//Run this anonymous function when the promise resolves
stopWatch.then(function(stop) {
    document.getElementById("stop").innerHTML = stop;
    console.log(stop)
})


// Medium Exercises
// The Tortoise and the Hare
// Create two animals (a tortoise and a hare) that race each other.
// Start each animals with a separate promise
// End each promise on a random time between 1-10 seconds
// Display the winner (or determine if it's a tie)
// Display the total time it took for each animal
var tortoise = new Promise(function(resolve,reject) {
    var tortoiseTime = Math.floor(Math.random() * (+10 - +1)) + +1;
    setTimeout(function() {
        resolve("Tortoise time= " +tortoiseTime);
    }, tortoiseTime*1000);

});

var hare = new Promise(function(resolve,reject) {
    var hareTime = Math.floor(Math.random() * (+10 - +1)) + +1;
    setTimeout(function() {
        resolve("Hare time= " +hareTime);
    }, hareTime*1000);
});

Promise.all([tortoise, hare]).then(function(value) {
    console.log(value);
})
//if statement

// 1. Creating a Promise logger()
// Write a logger() function that =console.log()=s the argument it was passed, and returns it.
// Add the logger() to one of your small exercises to show what values are being passed through the Promise chain.
// Try using it multiple times within a single Promise chain.
function logger(arg) {
    console.log(arg);
}

// 2. Sorting and filtering Jon Snow's aliases
// Add a processing step to the sample code that sorts Jon Snow's aliases alphabetically. 
// Add another step that filters out any aliases that do not begin with the word "The".


// 3. Listing the characters in a book
// For a single book in the API (e.g., https://anapioficeandfire.com/api/books/1), there is a key named povCharacters that contains an array of character URLs.
// Create a Promise chain that displays the name and released date for a book. Incorporate Promise.all() to show all the name of all of the povCharacters for that book.


// Large
// 1. Game of Thrones character browser
// The Game of Thrones API provides a way to retrieve pages of characters. Read the documentation so that you can fetch() 25 characters at a time.
// Display the names of each character in a list (filtering out any characters that do not have a name). Make each one a link that

// 2. Show today's weather
// Create a new app (with an index.html and an index.js) that uses data from the OpenWeather API.
// Retrieve the current weather for your city using fetch() and create a pipeline of .then() functions that draw the data to the page.
// Make sure to .catch() any errors that might occur.
// Once you can retrieve the weather for a hard-coded city, try using the browser's Geolocation API to automatically find the user's location.
// The Geolocation API is asynchronous, but uses the callback style. Wrap these API calls in a new Promise so that it can be incorporated into your Promise chain.

// 3. Movie search
// Create a new app that lets the user search for movies by title. Sign up for an API key and use the data from the Open Movie Database or from The Movie DB.
// Provide the user with a form so that they can enter a movie title. On submit, make the fetch() request to the API. Add a Reset button that clears the form and the movie information on the page.
// After you have confirmed that you can successfully fetch() data and .catch() errors, cache the data to localStorage so that your app doesn't need to make a network request for any locally stored movie data.

// 4. Horse Race
// Create a horse race simulation.
// Create a race with at least 5 racers
// Start each racer at the exact same time
// Randomly generate a random time for each racer between 1-10 seconds (allow floats/decimals)
// Display the times only after all of the racers are done