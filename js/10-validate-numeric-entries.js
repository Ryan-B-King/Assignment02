let futureValue= 0; 
let investment = 0; 
let rate = 0; 
let years = 0;
let i;

investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(window.prompt("Enter interest rate as xx.xx"));
years = parseInt(window.prompt("Enter number of years"));

futureValue = investment;
for (i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future Value: $" + futureValue.toFixed(2));