// GLOBAL VARIABLE
let countdown;

// PROMPT FOR USER TO PROVIDE START OF COUNTDOWN TIMER
countdown = Number(window.prompt("INPUT NUMBER TO COUNTDOWN FROM:"));

// FOR LOOP TO COUNTDOWN FROM PROMPT VALUE DOWN TO ZERO
for (countdown; countdown >= 0; countdown--){
    window.console.log(countdown);
}

// CONSOLE LOG TO SHOW COUNTDOWN HAS BEEN COMPLETED
window.console.log("Countdown complete.");
