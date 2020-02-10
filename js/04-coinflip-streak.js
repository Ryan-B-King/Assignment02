// GLOBAL VARIABLES
let coinFlip;
let result;
let counter = 1;

// DO WHILE FUNCTION - KEEPS RUNNING WHILE FINAL RESULT IS HEADS
// BREAKS IF TAILS
do{
    result = Math.round (Math.random(coinFlip));
    result = (result === 0) ? "Heads" : "Tails";
    window.console.log("Toss made.  You got: " + result + ".");
    if (result === "Heads") {
        window.console.log("How many HEADS in a row: " + counter + "  Toss again!");
    } else {
        window.console.log("Boo! Your streak ended!");
    }
    counter++
} while (result === "Heads");
