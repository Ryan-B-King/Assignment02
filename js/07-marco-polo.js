// GLOBAL VARIABLES
let i;

// FOR LOOP EVALUATING CONDITIONAL VALUES TO DETERMINE VARIOUS OUTPUT
for (i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        window.console.log("Marco! Polo!");
    } else if (i % 5 === 0) {
        window.console.log("Polo!");
    } else if (i % 3 === 0){
        window.console.log("Marco!");
    } else {
        window.console.log(i);
    }
}