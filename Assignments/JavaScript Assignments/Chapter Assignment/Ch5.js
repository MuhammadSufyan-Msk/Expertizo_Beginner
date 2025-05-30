//Chapter 5
//Point 1 
//Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<h1>Chapter 5</h1>");
document.write("Point 1<br>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");
//Point 2
document.write("<br>Point 2<br>");
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is: " + sub + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is: " + mul + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is: " + div + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is: " + mod + "<br>");
//Point 3
document.write("<br>Point 3<br>");
var num = 5;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
num = num % 3;
document.write("The remainder is: " + num + "<br>");
//Point 4
document.write("<br>Point 4<br>");
var ticketPrice = 600;
var numTickets = 5;
var totalCost = ticketPrice * numTickets;
document.write("Total cost to buy " + numTickets + " tickets to a movie is: " + totalCost + " PKR<br>");
//Point 5
document.write("<br>Point 5<br>");
var tableNum = 4;
var tableLength = 10;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
//Point 6
document.write("<br>Point 6<br>");
var celsiusTemperature = 35; 
var celsiusToFahrenheit = (celsiusTemperature * 9/5) + 32;
fahrenheitTemperature = celsiusToFahrenheit + "°F";

document.write("<br>" + celsiusTemperature + "°C is " + fahrenheitTemperature)

var fahrenheitTemperature = 95;
var fahrenheitToCelsius = (fahrenheitTemperature - 32) * 5/9;
celsiusTemperature = fahrenheitToCelsius + "°C";
document.write("<br>" +fahrenheitTemperature + "°F is " + celsiusTemperature + "<br>");
//Point 7
document.write("<br>Point 7<br>");
var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;
var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("Total cost of your order is: " + totalCost + " PKR<br>");
//Point 8
document.write("<br>Point 8<br>");
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
//Point 9
document.write("<br>Point 9<br>");
var usDollar = 10;
var saudiRiyal = 25;
var totalCurrency = (usDollar * 104.80) + (saudiRiyal * 28);
document.write("Total Currency in PKR: " + totalCurrency + "<br>");
//Point 10
document.write("<br>Point 10<br>");
var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br>");
//Point 11
document.write("<br>Point 11<br>");
var currentYear = 2025;
var birthYear = 2003;
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age: " + age + "<br>");
//Point 12
document.write("<br>Point 12<br>");
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;
document.write("Radius of Circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");
//Point 13
document.write("<br>Point 13<br>");
var favoriteSnack = "chocolate chip cookies";
var currentAge = 22;
var maxAge = 65;
var estimatedAmount = 3;
var totalSnacks = (maxAge - currentAge) * estimatedAmount;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");