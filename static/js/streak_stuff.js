
// Use const for variables that don't change
const formForStreak2 = document.querySelector('form');
const todayStreak = new Date();

const streakLastGuessDate = localStorage.getItem("streakLastGuessDate");

// Use numbers instead of strings for streak count
let streakCount = localStorage.getItem("myStreak") || 0;

// Use one function to check if dates are consecutive or not
function isConsecutive(date1, date2) {
  // Get the year, month and day of each date
  const year1 = date1.getUTCFullYear();
  const month1 = date1.getUTCMonth();
  const day1 = date1.getUTCDate();
  const year2 = date2.getUTCFullYear();
  const month2 = date2.getUTCMonth();
  const day2 = date2.getUTCDate();

  // Check if the dates are one day apart
  return (
    (year1 === year2 && month1 === month2 && day1 === day2 + 1) || // Same month and year
    (year1 === year2 && month1 === month2 + 1 && day1 === 0 && day2 === new Date(year2, month2 + 1, 0).getDate()) || // Next month and same year
    (year1 === year2 + 1 && month1 === 0 && month2 === new Date(year2 + 1).getMonth() - 11 && day1 === new Date(year3).getDate() - new Date(year3).getDay() - new Date(year3).getMonth()) // Next year
    );
}

if (streakLastGuessDate) {
    // Parse the last guess date from the local storage
    const lastGuessDate = new Date(streakLastGuessDate);

    if (isConsecutive(todayStreak, lastGuessDate)) {
        // Increment the streak count by one
        streakCount++;
        console.log("Hurray, let's add one to your streak!");
    } else {
        // Reset the streak count to zero
        streakCount = 0;
        console.log("Bye bye, streak!");
    }

    // Update the local storage with the new values
    localStorage.setItem("myStreak", streakCount);
    localStorage.setItem("streakLastGuessDate", todayStreak);

    // Update the HTML element with the current streak count
    document.getElementById("streak").innerHTML = streakCount;
}