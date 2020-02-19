let miles, gallons, mpg, again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("Enter size of tank in gallons"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons >0) {
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg) + "<br>");
    } else {
        window.alert("One or both entries are invalid");
    }
    again = window.prompt("Repeat entry? (y/n)");
} while (again === "y");
// window.document.write("Party's over, man. Go home"); not necessary but could be a useful format

