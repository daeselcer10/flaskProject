// idea: listen for form submit.
// when submit, create new variable with submit time
// only update this once per day
// then everything else will work as i have it


const formForStreak = document.querySelector('form');
const todayStreak = new Date();
localStorage.setItem("todayStreak", todayStreak.toUTCString());

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date();
    if (todayStreak.toDateString() !== streakTime.toDateString()){
        localStorage.setItem("streakLastGuessDate", streakTime.toUTCString())
        console.log("Updated streakLastGuessDate, user has not guessed today")
    } else {
        console.log("Do not update; user has already guessed today")
    }
})
