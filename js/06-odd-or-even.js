// GLOBAL VARIABLES
let value;
let result;

// INITIAL VALUE 
value = 0

// DO WHILE LOOP USING MODULUS TO DETERMINE IF VALUE IS ODD OR EVEN
do{
    result = value % 2;
    // NESTED IF STATEMENT TO DISPLAY ODD OR EVEN
    if (result === 0){
        window.console.log(value + " is Even");
    } else {
        window.console.log(value + " is Odd");
    }
    value++;
} while (value < 16);
