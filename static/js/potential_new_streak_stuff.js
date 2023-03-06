// idea: listen for form submit.
// when submit, create new variable with submit time
// only update this once per day
// then everything else will work as i have it


const formForStreak = document.querySelector('form');
const todayStreak = new Date();

// below is old stuff

//formForStreak.addEventListener('submit', function(){
   // const streakTime = new Date();
    //if (todayStreak.toDateString() !== streakTime.toDateString()){
      //  localStorage.setItem("streakLastGuessDate", todayStreak.toDateString());
       // console.log("Updated streakLastGuessDate, user has not guessed today")
    //} else {
      //  console.log("Do not update; user has already guessed today")
    //}
//})

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date();
    const todayForStreak = new Date(todayStreak);
    if (datesAreSameDay(streakTime, todayForStreak)){
        localStorage.setItem("streakLastGuessDate", streakTime.toUTCString())
    } else if (!datesAreSameDay(streakTime,todayForStreak)){
        console.log("Do something here")
    }
})