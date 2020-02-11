// GLOBAL VARIABLES
let coinFlip;
let result;
let counter;

// INITIALIZED COUNTER TO START AS 1
counter = 1;

// DO WHILE LOOP - KEEPS RUNNING WHILE FINAL RESULT IS HEADS
// BREAKS IF TAILS
do{
    result = (Math.round (Math.random(coinFlip))) ? "Heads" : "Tails";
    window.console.log("Toss made.  You got: " + result + ".");
    if (result === "Heads") {
        window.console.log("How many HEADS in a row: " + counter + "  Toss again!");
    } else {
        window.console.log("Boo! Your streak ended!");
    }
    counter++
} while (result === "Heads");
