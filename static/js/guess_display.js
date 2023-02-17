/*!
 * Code adapted from Tania Rascia, 2017
 * Original: (https://github.com/taniarascia/sandbox/tree/master/tab)
 * No original license provided
 * Adapted by Dae Selcer and Drew Pereli
 */
const form = document.querySelector('form');
const ul = document.getElementById('show_guesses');
const button = document.getElementById('clearly'); // this will need to change!!!
const input = document.getElementsByName('guess');
let displayGuesses = localStorage.getItem('my_guesses') ? JSON.parse(localStorage.getItem('my_guesses')) : [];


localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
const data = JSON.parse(localStorage.getItem('my_guesses'));


const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
// there's good stuff here
form.addEventListener('submit', function () {
  displayGuesses.push(input[0].value);
  localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
  liMaker(input[0].value);
  counter.submit++;
  localStorage.setItem("counter", JSON.stringify(counter));
  const time = new Date();
  localStorage.setItem("last_guess_date", time.toUTCString());

});

//does this work?
data.forEach(guess => {
  liMaker(guess);
});

// this will need to change!!!
button.addEventListener('click', function () {
  localStorage.removeItem('my_guesses');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  displayGuesses = [];
});

// EVERYTHING BELOW HERE IS NEW

// called on guess submit -- do i need all of this? i already have counter.submit and counter++
function guess_function() {
  // Get current guess count from localStorage. If none, default to zero
  let guessCount = localStorage.getItem("counter") || 0;
  // increment guess count
  guessCount++;
  // save new count to local storage
  localStorage.setItem("guessCount", guessCount);
  //Update UI with new guess count
  document.getElementById("guesses").innerHTML = guessCount;
  // save time to localstorage to determine when user made last guess
  const time = new Date();
  localStorage.setItem("lastGuessTime", time.toUTCString())
}

//function to check if 2 dates are the same
function datesAreSameDay(date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate();
}

//code down here runs on page load. check if guess made today, if not reset count

// get last guess time from localStorage
const lastGuessTimeString = localStorage.getItem("lastGuessTime");

// if last guess time not null, then user has made a guess before
// in that case, check if last guess = today. if not, reset count
if (lastGuessTimeString) {
  //create date object from last guess time string
  const lastGuessTime = new Date(lastGuessTimeString);
  // create new date for today - DOES THIS NEED TO GO IN LOCAL STORAGE SOMEHOW?
  const today = new Date();
  // check if last guess was NOT made today
  if (!datesAreSameDay(lastGuessTime, today)) {
    localStorage.setItem("guessCount", 0);
  }
}

//Update UI with current guess count
let guessCount = localStorage.getItem("guessCount") || 0;
document.getElementById("guesses").innerHTML = guessCount;