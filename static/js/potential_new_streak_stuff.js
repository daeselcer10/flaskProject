// i think the problem is here
// do i need to make an array and capture each

const formForStreak = document.querySelector('form');
const todayStreak = new Date().toISOString();

formForStreak.addEventListener('submit', function(){
    let streakTime = new Date(streakLastGuess);
    let todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toISOString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        streakCount++;
        document.getElementById("streak").innerHTML = JSON.stringify(streakCount);
        localStorage.setItem("streakCount", JSON.stringify(streakCount));
        localStorage.setItem("streakLastGuessDate", todayForStreak.toISOString());
        console.log("Hurray, let's add one to your streak!");

    }
})