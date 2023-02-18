/*!
 * Code adapted from Tania Rascia, 2017
 * Original: (https://github.com/taniarascia/sandbox/tree/master/tab)
 * No original license provided
 * Adapted by Dae Selcer
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

// other backups from play.html

function clearCount() {
    document.getElementById("guesses").innerText = '0 guesses';
    counter.submit=0;
    localStorage.setItem("counter", JSON.stringify(counter));
}

<p>Remember to click <button onClick='clearCount();' className="btn btn-outline-secondary btn-sm"
                             id="clearly">here</button> to reset guesses
  when it's time to play a new game.</p>

const button = document.getElementById('clearly');

button.addEventListener('click', function () {
  localStorage.removeItem('my_guesses');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  displayGuesses = [];
});