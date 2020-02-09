// GLOBAL VARIABLES
let coinFlip;
let result;
let final;
let end;
let counter = 1;

// DO WHILE FUNCTION - KEEPS RUNNING WHILE FINAL RESULT IS HEADS
// BREAKS IF TAILS
do{
    result = Math.round (Math.random(coinFlip));
    final = (result === 0) ? "Heads" : "Tails";
    counter = (final === "Heads") + 1;
    window.console.log("Flips made: " + result + " -- How many HEADS in a row: " + counter);
    end = (final === "Tails") ? window.console.log("Streak ended.  You got " + final) : window.console.log ();
} while (final === "Heads");