// GLOBAL VARIABLES
let value = 0;
let result;

// DO WHILE LOOP USING MODULUS TO DETERMINE IF VALUE IS ODD OR EVEN THEN STATING IN CONSOLE
do{
    result = value % 2;
    if (result === 0){
        window.console.log(value + " is Even");
    } else {
        window.console.log(value + " is Odd");
    }
    value++;
} while (value < 16);
