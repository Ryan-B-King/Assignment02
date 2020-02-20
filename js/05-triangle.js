// GLOBAL VARIABLES
let triangle;
let counter;

// INITIAL VALUE OF TRIANGLE
triangle = "#";

// FOR LOOP TO CONCATENATE # AND MAKE TRIANGLE IN CONSOLE 
for (counter = 0; counter < 7; counter++){
    window.console.log(triangle);
    triangle = triangle + "#";
}