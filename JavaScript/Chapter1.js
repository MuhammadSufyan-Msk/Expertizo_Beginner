// // // Method
// alert("Welcome to JavaScript");

// // Variable
// var firstName = prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your Last Name:");

// alert(
//     "Welcome" + firstName + " " + lastName
// )

// var age = 18; 

// if (age>= 18)
// (
//     console.log("You are an Adult")
// )

// var moviePrice = 600;
// var totalPrice = moviePrice * 5;
// document.write("<h1>Total Price of 5 Movie Tickets:" + totalPrice + "PKR</h1>")

// console.log(typeof userAge)
// // Concatination occur by adding integer & string together

// var num1 = 10;
// var num2 = 5;
// var add = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;

// console.log(add)
// console.log(sub)
// console.log(mul)
// console.log(div)

// var num = 10;
// console.log(num++) // Post Increment = 10
// console.log(num) // Incremented Result = 11

// var num = 5;
// console.log(++num) // Pre Incremented Result = 11

// // Post & Pre Incrementation
// var a = 10;
// var b = 15;
// var c = a++ + ++b + a++ + b++ + ++a + b++ + a++ + ++b + a++ + b++;
// console.log(c)

// var num1 = 70;
// var num2 = 80;
// var num3 = num1++ + num2++ + ++num1 + num2++ + ++num1 + num2++ + num1++ + ++num2 + num1++ + num2++;
// console.log(num3)

// var fullName = firstName + " " + lastName;

// alert(
//     "How do you do " + firstName + " " + lastName + "Sir?"
// )

// console.log(fullName)

// // Temperature Forumla
// var celsiusTemperature = 35; 
// var celsiusToFahrenheit = (celsiusTemperature * 9/5) + 32;
// fahrenheitTemperature = celsiusToFahrenheit + "°F";

// document.write("<h1>" + celsiusTemperature + "°C is " + fahrenheitTemperature + "</h1>")

// var fahrenheitTemperature = 95;
// var fahrenheitToCelsius = (fahrenheitTemperature - 32) * 5/9;
// celsiusTemperature = fahrenheitToCelsius + "°C";
// document.write("<h1>" + fahrenheitTemperature + "°F is " + celsiusTemperature + "</h1>")

var num1 = +prompt("Enter First Number")
var num2 = +prompt("Enter Second Number")
var operator = prompt("Enter Operator (+, -, *, /, %)")

if(operator == '+')
{
    var result = (num1) + (num2)
    console.log("The Sum of " + num1 + " and " + num2 + " is " + result)
}
else if(operator == '-')
{
    var result = (num1) - (num2)
    console.log("The Diff. of " + num1 + " and " + num2 + " is " + result)
}
else if(operator == '*')
{
    var result = (num1) * (num2)
    console.log("The Product of " + num1 + " and " + num2 + " is " + result)
}
else if(operator == '/')
{
    var result = (num1) / (num2)
    console.log("The Division of " + num1 + " and " + num2 + " is " + result)
}
else if(operator == '%')
{
    var result = (num1) % (num2)
    console.log("The Modulus of " + num1 + " and " + num2 + " is " + result)
}
else
{
    console.log("Invalid Operator")
}