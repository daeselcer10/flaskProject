
// Get today's date
let today = new Date();
// Get last guess date from localStorage or set it to yesterday if not found
let lastGuessDate = new Date(localStorage.getItem("last_guess_date") || yesterday);
// Get streak count from localStorage or set it to one if not found
let streakCount = localStorage.getItem("streakCount") || 1;
// Set a local storage item for myStreak - removed from here

// Function to break streak if gap of > 1 day
function breakStreak(date1, date2) {
  // Convert dates to milliseconds and get difference
  let diff = Math.abs(date1.getTime() - date2.getTime());
  // Return true if difference is more than one day (86400000 milliseconds)
  return diff > 86400000;
}

// Function to continue streak if you are playing on the next day hurray
function continueStreak(date1, date2) {
  // Convert dates to milliseconds and get difference
  let diff = Math.abs(date1.getTime() - date2.getTime());
  // Return true if difference is exactly one day (86400000 milliseconds)
  return diff === 86400000;
}

window.onload = function () {

    // Check if last guess date is equal to today's date
    if (lastGuessDate.toDateString() === today.toDateString()) {
      // Do nothing as user has already guessed today
    }
    // Check if last guess date is one day before today's date
    else if (continueStreak(lastGuessDate, today)) {
      // Increment streak count by one and update localStorage
      streakCount++;
      localStorage.setItem("myStreak", JSON.stringify(streakCount));
      document.getElementById("streak").innerHTML = JSON.stringify(streakCount);
    }
    // Otherwise reset streak count to one and update localStorage
    else {
      streakCount = 1;
      localStorage.setItem("myStreak", JSON.stringify(streakCount));
      document.getElementById("streak").innerHTML = JSON.stringify(streakCount);
    }

   // Update last guess date only if it is different from today's date
   if (lastGuessDate.toDateString() !== today.toDateString()) {
     localStorage.setItem("last_guess_date", today);
   }
};
