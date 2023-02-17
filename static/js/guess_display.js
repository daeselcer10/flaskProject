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


const liMaker = function (text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
// some of this might need to change
form.addEventListener('submit', function () {
  displayGuesses.push(input[0].value);
  localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
  liMaker(input[0].value);
  counter.submit++;
  localStorage.setItem("counter", JSON.stringify(counter)); //this is a duplicate, line 49 in play.html
  const time = new Date();
  localStorage.setItem("last_guess_date", time.toUTCString());

});

//for each guess, add to list maker
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


//function to check if 2 dates are the same - can be used as-is
function datesAreSameDay(date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate();
}

//code down here runs on page load. check if guess made today, if not reset count

// get last guess time from localStorage
const lastGuessTimeString = localStorage.getItem("last_guess_date");

// if last guess time not null, then user has made a guess before
// in that case, check if last guess = today. if not, reset count
if (lastGuessTimeString) {
  //create date object from last guess time string
  const lastGuessTime = new Date(lastGuessTimeString);
  // create new date for today - doesn't need to go in local storage because just being used in function, yes?
  const today = new Date();
  // check if last guess was NOT made today
  if (!datesAreSameDay(lastGuessTime, today)) {
    counter.submit = 0;
    localStorage.setItem("counter", JSON.stringify(counter)); // how do i make this counter.submit? also, stringified
    // do i also need to set the counter.submit itself to 0?
    localStorage.removeItem('my_guesses');
      while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
    displayGuesses = [];
  }
}

//Update UI with current guess count
let guessCount = localStorage.getItem("guessCount") || 0; //should be the counter
document.getElementById("guesses").innerHTML = guessCount;