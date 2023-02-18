/*!
 * Code adapted from Tania Rascia, 2017
 * Original: (https://github.com/taniarascia/sandbox/tree/master/tab)
 * No original license provided
 * Adapted by Dae Selcer and Drew Pereli
 */

const form = document.querySelector('form');
const ul = document.getElementById('show_guesses');
 // DELETED clear button from here
const input = document.getElementsByName('guess');
let displayGuesses = localStorage.getItem('my_guesses') ? JSON.parse(localStorage.getItem('my_guesses')) : [];


localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
const data = JSON.parse(localStorage.getItem('my_guesses'));


const liMaker = function (text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
// submit event listener, push guesses to local storage, increment counter, add last guess date
form.addEventListener('submit', function () {
  displayGuesses.push(input[0].value);
  localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
  liMaker(input[0].value);
  counter.submit++;
  localStorage.setItem("counter", JSON.stringify(counter)); //this is a duplicate, line 41 and 49 in play.html
  const time = new Date();
  localStorage.setItem("last_guess_date", time.toUTCString());

});

//for each guess, add to list maker
data.forEach(guess => {
  liMaker(guess);
});

// DELETED button clear from here

//function to check if 2 dates are the same - love this
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
  // check if last guess was NOT made today, also remove
  if (!datesAreSameDay(lastGuessTime, today)) {
    counter.submit = 0;
    localStorage.setItem("counter", JSON.stringify(counter));
    localStorage.removeItem('my_guesses');
      while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
    displayGuesses = [];
  }
}

//Update UI with current guess count
let guessCount = localStorage.getItem("guessCount") || 0;
document.getElementById("guesses").innerHTML = guessCount; //innerText? 0 guesses,not just 0?