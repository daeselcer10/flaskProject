// why does nothing work why lord why


const formForStreak = document.querySelector('form');
const todayStreak = new Date();

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date();
    const todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toUTCString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        console.log("Do something here")
    }
})

const streakLastGuess = localStorage.getItem("streakLastGuessDate");
// Get the streak count from localStorage or set it to one if not found
let streakCount = localStorage.getItem("streakCount") || 0;

//function to break streak if gap of  > 1 day
function breakStreak (date1, date2) {
  return date1.getUTCFullYear() > date2.getUTCFullYear() + 1 ||
      date1.getUTCMonth() > date2.getUTCMonth() + 1 ||
      date1.getUTCDate() > date2.getUTCDate() + 1;
}


// function to continue streak if you are playing on the next day hurray - not currently using
function continueStreak (date1, date2) {
  return date1.getUTCFullYear() === date2.getUTCFullYear() + 1 ||
      date1.getUTCMonth () === date2.getUTCMonth() + 1 ||
      date1.getUTCDate() === date2.getUTCDate() + 1;
}
if (streakLastGuess) {
    const breakLastGuessTimeStreak = new Date(streakLastGuess);
    const todayToday = new Date();
    if (breakStreak(todayToday, breakLastGuessTimeStreak)) { // this works
        streakCount = 0;
        localStorage.setItem("myStreak", JSON.stringify(streakCount));
        console.log("Bye bye, streak!");
        document.getElementById("streak").innerHTML = JSON.stringify(streakCount);
    } else { // problem is here?
        localStorage.getItem("myStreak");
        streakCount = +streakCount; // converts to number
        streakCount++; // this is not incrementing past one
        localStorage.setItem("myStreak", JSON.stringify(streakCount)); // restore as string
        console.log("Hurray, let's add one to your streak!");
        console.log(JSON.stringify(streakCount));
        document.getElementById("streak").innerHTML = JSON.stringify(streakCount);
    }
}
