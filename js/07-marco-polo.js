let i;
let value;
let marco;
let polo;
let marcoPolo;

for (i = 1; i < 16; i++){
    marco = (i % 3 === 0 && i % 5 !== 0) ? "Marco!" : i;
    polo = (i % 3 !== 0 && i % 5 === 0) ? "Polo!" : i;
    marcoPolo = (i % 3 === 0 && i % 5 === 0) ?  "Marco Polo!" : i;
    // window.console.log(marco, polo, marcoPolo);

    if (marco){
        value = marco
        window.console.log(value);
    } else if (polo) {
        value = polo;
        window.console.log(value);
    } else if (marcoPolo) {
        value = marcoPolo;
    }   else {
        value = i;
    }
    window.console.log(value);




    // marco = (i % 3 === 0 && i % 5 !== 0) ? "Marco!" : i;
    // // window.console.log(value);
    // polo = (i % 3 !== 0 && i % 5 === 0) ? "Polo!" : i;
    // // window.console.log(value);
    // marcoPolo = (i % 3 === 0 && i % 5 === 0) ?  "Marco Polo!" : i;
    // window.console.log(marco, polo, marcoPolo);

    // switch (value){
    //     case "Marco Polo!" : window.console.log("Marco Polo!");
    //         break;
    //     case "Polo!" : window.console.log("Polo!");
    //         break;
    //     case "Marco!" : window.console.log("Marco!");
    //         break;
    //     default : window.console.log(value);
    // }
}