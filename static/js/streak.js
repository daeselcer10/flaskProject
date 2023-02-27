//Code to make a streak for days played in a row.
// Probably need to move some of this code to  window.onload function() {} - the one in
// line 24 of play.html

// Get the current date
let streakToday = new Date();
// Create a new variable for the date of the last guess - grab from local storage
let streakLastGuess = localStorage.getItem("last_guess_date");

// Get the streak count from localStorage or set it to zero if not found
let streakCount = localStorage.getItem("streakCount") || 0;
// Set a local storage item

localStorage.setItem("myStreak", streakCount)

//function to break streak if gap of  > 1 day
function breakStreak (date1, date2) {
  return date1.getUTCFullYear() > date2.getUTCFullYear() + 1 ||
      date1.getUTCMonth() > date2.getUTCMonth() + 1 ||
      date1.getUTCDate() > date2.getUTCDate() + 1;
}

if (streakLastGuess, streakToday){
  if (breakStreak(streakLastGuess, streakToday)){
    streakCount = 0;
    localStorage.setItem("myStreak", streakCount); // do i need to do this?
    console.log("Bye bye, streak!")
    document.getElementById("streak").innerHTML = `Your current streak is ${streakCount}`;
  }
  else {
    console.log("The break streak function returned false; streak not broken.")
  }
}

// function to continue streak if you are playing on the next day
function continueStreak (date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() +1 ||
      date1.getUTCMonth () === date2.getUTCMonth() +1 ||
      date1.getUTCDate() === date2.getUTCDate() +1;
}

if (streakLastGuess, streakToday){
  if (continueStreak(streakLastGuess, streakToday)){
    streakCount ++;
    localStorage.setItem("myStreak", streakCount);
    console.log("Hurray! Let's add one to your streak.")
    document.getElementById("streak").innerHTML = `Your current streak is ${streakCount}`;
  }
  else {
    console.log("The continue streak function returned false; it's either time to break the streak, or it's the same day.")
  }
}
//function to check if 2 dates are the same - in this case, you would do nothing - do I need this?
function doNothingToStreak (date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() &&
      date1.getUTCMonth() === date2.getUTCMonth() &&
      date1.getUTCDate() === date2.getUTCDate();
}
