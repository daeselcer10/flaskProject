// idea: listen for form submit.
// when submit, create new variable with submit time
// only update this once per day
// then everything else will work as i have it


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