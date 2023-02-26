// Get the current date
let todayToday = new Date();

// Get the last date from localStorage or set it to today if not found
var lastDate = localStorage.getItem("lastDate") || todayToday;

// Convert the dates to strings in YYYY-MM-DD format
var todayString = todayToday.toISOString().slice(0, 10);
var lastDateString = lastDate.toISOString().slice(0, 10);

// Get the streak count from localStorage or set it to zero if not found
var streakCount = localStorage.getItem("streakCount") || 0;

// Compare the dates and update the streak count accordingly
if (todayString === lastDateString) {
  // Do nothing if the dates are the same
} else if (todayString === lastDateString + 1) {
  // Increment the streak count by one if the difference is one day
  streakCount++;
} else {
  // Reset the streak count to zero if the difference is more than one day
  streakCount = 0;
}

// Save the current date and streak count to localStorage
localStorage.setItem("lastDatePlayed", todayToday);
localStorage.setItem("streakCount", streakCount);

// Display the streak count on the screen
document.getElementById("streak").innerHTML = "Your current streak is: " + streakCount;