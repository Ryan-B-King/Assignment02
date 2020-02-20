//GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let i;

//COLLECT VALUES FROM USER
investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx", "Input a numeric value of 1.00 or more")).toFixed(2);

// VALIDATE INVESTMENT INPUT
if (!isNaN(investment) && investment >= 1) {
    investment;
} else {
    while (isNaN(investment) || investment < 1) {
        investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx", "Input a numeric value of 1.00 or more")).toFixed(2);
        if (!isNaN(investment) && investment >= 1) {
            break;
        }
    }
}

rate = parseFloat(window.prompt("Enter interest rate as x.x", "Input betweem 0.1 and 6.9")).toFixed(1);

// VALIDATE RATE INPUT
if (!isNaN(rate) && rate >= 0.1 && rate <= 6.9) {
    rate;
} else {
    while (isNaN(rate) || rate < 0.1 || rate > 6.9) {
        rate = parseFloat(window.prompt("Enter interest rate as x.x", "Input betweem 0.1 and 6.9")).toFixed(1);
        if (!isNaN(rate) && rate >= 0.1 && rate <= 6.9) {
            break;
        }
    }
}

years = parseInt(window.prompt("Enter number of years", "Input between 1 to 30"), 10);

// VALIDATE YEARS INPUT
if (!isNaN(years) && years >= 1 && years <= 30) {
    years;
} else {
    while (isNaN(years) || years < 1 || years > 30) {
        years = parseInt(window.prompt("Enter number of years", "Input between 1 to 30"), 10);
        if (!isNaN(years) && years >= 1 && years <= 30) {
            break;
        }
    }
}

//CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY RESULT
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + parseInt(futureValue, 10));