// i think the problem is here
// do i need to make an array and capture each

const formForStreak = document.querySelector('form');
const todayStreak = new Date().toISOString();

formForStreak.addEventListener('submit', function(){
    let streakTime = new Date().toISOString;
    let todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toISOString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        console.log("Do something here")
    }
})
