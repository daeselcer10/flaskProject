// why does nothing work why lord why
// definitely a problem here: if this works, it will update the streak every time that
// there is a new guess, i think.

const formForStreak = document.querySelector('form');
const todayStreak = new Date().toISOString();

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date().toISOString;
    const todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toISOString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        console.log("Do something here")
    }
})
