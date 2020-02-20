// GLOBAL VARIABLES
let miles;
let gallons;
let mpg;
let again = "y";

//LOOP TO COLLECT MPG INFORMATION
do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg, 10) + "<br>");
    } else {
        window.alert("One or both entries are invalid");
    }
    again = window.prompt("Repeat entries? (y/n)", "y");

    // INPUT VALIDATION
    if (again === "y" || again === "n") {
        again;
    } else {
        while (again !== "y" || again !== "n") {
            again = window.prompt("Repeat entry? (y/n)");
            if (again === "y" || again === "n") {
                break;
            }
        }
    }
    // END OF VALIDATION

} while (again === "y");