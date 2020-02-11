// GLOBAL VARIABLES
let num1;
let num2;

// OBTAIN VALUES FROM USER & CONVERT TO NUMBER
num1 = Number(window.prompt("I'll tell you the LARGER of two numbers! \n\nTell me your first number:"));
num2 = Number(window.prompt("I'll tell you the LARGER of two numbers! \n\nTell me your second number:"));
window.console.log(typeof num1, num1, typeof num2, num2);


// IF STATEMENT & ALERT TO RETURN LARGER VALUE BACK TO USER
if (num1 > num2) {
    window.document.write("I GOT IT!!\n\nThe larger number is: " + num1);
} else if (num1 < num2){
    window.document.write("I GOT IT!!\n\nThe larger number is: " + num2);
} else {
    window.document.write("Ummm... these numbers are the same.  Try again.");
}

