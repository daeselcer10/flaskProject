/*!
 * Code adapted from Tania Rascia, 2017
 * Original: (https://github.com/taniarascia/sandbox/tree/master/tab)
 * No original license provided
 * Adapted by Dae Selcer
 */
const form = document.querySelector('form');
const ul = document.getElementById('show_guesses');
const button = document.getElementById('clearly');
const input = document.getElementById('guess');
let displayGuesses = localStorage.getItem('my_guesses') ? JSON.parse(localStorage.getItem('my_guesses')) : [];


localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
const data = JSON.parse(localStorage.getItem('my_guesses'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}
// this currently does not work
form.addEventListener('submit', function () {
  displayGuesses.push(input.value);
  localStorage.setItem('my_guesses', JSON.stringify(displayGuesses));
  liMaker(input.value);
  input.value = "";
  form.submit();
});

//does this work?
data.forEach(guess => {
  liMaker(guess);
});

button.addEventListener('click', function () {
  localStorage.removeItem('my_guesses');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  displayGuesses = [];
});

