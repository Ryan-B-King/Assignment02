// GLOBAL VARIABLES
let coinFlip;
let flip;

// FOR STATEMENT - GENERATES RANDOM VALUE FOR COINFLIP AND PROVIDES FINAL VALUE
for (flip=0; flip < 10; flip++) {
    result = Math.round (Math.random(coinFlip));
    final = (result === 0) ? "Heads" : "Tails";
    window.console.log("Flip #: " + flip + " -- coinFlip: " + result + " -- final: " + final);
}