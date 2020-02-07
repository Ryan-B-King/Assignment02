// GLOBAL VARIABLES
let coinFlip;
let choice;
let heads;
let tails;

// GENERATE RANDOM VALUE OF COINFLIP
coinFlip = parseInt((Math.random(coinFlip) * 100)).toFixed(0);
window.console.log("coinFlip value is: " + coinFlip);

// USER INPUTS CHOICE VALUE
choice = window.prompt("Can you win the coin toss?\n\nType 'Heads' or 'Tails'");
window.console.log("choice value is: " + choice);

// BOOLEEN FOR COINFLIP HEADS vs TAILS
heads = (coinFlip < 50);
tails = (coinFlip >= 50);
window.console.log("Is coinFlip heads?(<50)  "+ heads + "." + "  Is coinFlip tails?(>=50)  " + tails + ".");

// BOOLEEN FOR CHOICE HEADS vs TAILS
choiceHeads = (choice === "Heads" || choice === "heads");
choiceTails = (choice === "Tails" || choice === "tails");
window.console.log("Is the value choiceHeads?  "+ choiceHeads + "." + "  Is the value choiceTails?  " + choiceTails + ".");


// CONDITION TEST COMARPARING COINTOSS vs CHOICE
if (heads && choiceHeads) {
    alert("The flip was heads and you chose heads...you win!");
} else if (heads && choiceTails) {
    alert("The flip was heads and you chose tails...you lose!");
} else if (tails && choiceHeads) {
    alert("The flip was tails and you chose heads...you lose!");
} else if (tails && choiceTails){
    alert("The flip was tails and you chose tails...you win!");
} else {
    alert("Invalid input has been detected.  Try again.");
}
