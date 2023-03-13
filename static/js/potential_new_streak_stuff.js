// why does nothing work why lord why


const formForStreak = document.querySelector('form');
const todayStreak = new Date().toUTCString();

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date().toISOString;
    const todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toISOString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        console.log("Do something here")
    }
})
