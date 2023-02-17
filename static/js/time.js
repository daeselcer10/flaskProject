
//Check if 2 dates are the same
function datesAreSameDay (date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate();
}
//get last guess time from local storage
const lastGuessTimeString = localStorage.getItem("last_guess_date");

//if last guess time not null, then user has made a guess
//so, check if last guess made today. if not today, reset guess count
if (lastGuessTimeString) {
  const lastGuessTime = new Date(lastGuessTimeString);

  const today = new Date();

  if (!datesAreSameDay(lastGuessTime, today)) {
    localStorage.setItem("counter", 0);
    localStorage.setItem("my guesses", null)
  }

}

//Update with current guess count
let counter = JSON.parse(localStorage.getItem("counter")) || {
    submit: 0,
    time: [],
  };