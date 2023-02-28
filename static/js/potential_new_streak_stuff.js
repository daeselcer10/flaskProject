// idea: listen for form submit.
// when submit, create new variable with submit time
// only update this once per day
// then everything else will work as i have it



    // Check if last guess date is equal to today's date
   // if (lastDayPlayed.toDateString() === today.toDateString()) {
      // Do nothing as user has already guessed today

   // Update last guess date only if it is different from today's date
   //if (lastGuessDate.toDateString() !== today.toDateString()) {
     //localStorage.setItem("last_guess_date", today);

const formForStreak = document.querySelector('form');
const todayStreak = new Date().toDateString();
localStorage.setItem("todayStreak", todayStreak);

formForStreak.addEventListener('submit', function(){
    const streakTime = new Date().toDateString();
    localStorage.setItem("streakLastGuessDate", streakTime)
    if (todayStreak !== streakTime){
        localStorage.setItem("todayStreak", streakTime)
    } else {
        console.log("Do not update; user has already guessed today")
    }
})