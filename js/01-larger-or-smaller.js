let num1;
let num2;

num1 = Number(window.prompt("I'll tell you the LARGER of two numbers! \n\nTell me your first number:"));
num2 = Number(window.prompt("I'll tell you the LARGER of two numbers! \n\nTell me your second number:"));

window.console.log(typeof num1, num1, typeof num2, num2);

if (num1 > num2) {
    alert("I GOT IT!!\n\nThe larger number is: " + num1);
} else if (num1 < num2){
    alert("I GOT IT!!\n\nThe larger number is: " + num2);
} else {
    alert("Ummm... these numbers are the same.");
}

