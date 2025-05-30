//Chapter 12-13
//Point 1
document.write("<h1>Chapter 12-13</h1>");
document.write("Point 1<br>");
var char = prompt("Enter a Single Character:");
if (char.length === 1) 
{
    var code = char.charCodeAt(0);

    if (code >= 48 && code <= 57) 
    {
        document.write("You entered a Number.<br>");
    } 
    else if (code >= 65 && code <= 90) 
    {
        document.write("You entered an Uppercase Letter.<br>");
    } 
    else if (code >= 97 && code <= 122) 
    {
        document.write("You entered a Lowercase Letter.<br>");
    } 
    else 
    {
        document.write("You entered a special character or symbol.<br>");
    }
} 
else 
{
    document.write("Please enter only a single character.<br>");
}
document.write("------------------------------<br>");

//Point 2
document.write("Point 2<br>");
var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");
if (num1 > num2) 
{
    document.write("The first number (" + num1 + ") is larger.<br>");
} 
else if (num2 > num1) 
{
    document.write("The second number (" + num2 + ") is larger.<br>");
} 
else 
{
    document.write("Both numbers are equal.<br>");
}
document.write("------------------------------<br>");

//Point 3
document.write("Point 3<br>");
var number = prompt("Enter a number:");
if (number > 0) 
{
    document.write("The number is Positive.<br>");
} 
else if (number < 0) 
{
    document.write("The number is Negative.<br>");
} 
else if (number === 0) 
{
    document.write("The number is Zero.<br>");
} 
else 
{
    document.write("Invalid input.<br>");
}
document.write("------------------------------<br>");

//Point 4
document.write("Point 4<br>");
var char = prompt("Enter a single character:");
if (char.length === 1) 
{
    var lowerChar = char.toLowerCase();
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') 
    {
        document.write("True: The character is a vowel. <br>");
    } 
    else 
    {
        document.write("False: The character is not a vowel. <br>");
    }
} 
else 
{
    document.write("Please enter only a single character. <br>");
}
document.write("------------------------------<br>");

//Point 5
document.write("Point 5<br>");
var correctPassword = "Sufyan@786";
var enteredPassword = prompt("Please enter your password:");
if (enteredPassword === null || enteredPassword === "") 
{
    document.write("Please enter your password.<br>");
} 
else 
{
    if (enteredPassword === correctPassword) 
    {
        document.write("Correct! The password you entered matches the original password.<br>");
    }
    else 
    {
        document.write("Incorrect password.<br>");
    }
}
document.write("------------------------------<br>");

//Point 6
document.write("Point 6<br>");
var greeting;
var hour = 13;
if (hour < 18) 
{
    greeting = "Good day";
} 
else 
{
    greeting = "Good evening";
}
document.write("Greetings: " + greeting + "<br>");
document.write("------------------------------<br>");

//Point 7
document.write("Point 7<br>");
var time = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
if (time >= 500 && time < 1200) 
{
    document.write("Good morning!<br>");
} 
else if (time >= 1200 && time < 1700) 
{
    document.write("Good afternoon!<br>");
} 
else if (time >= 1700 && time < 2100) 
{
    document.write("Good evening!<br>");
} 
else if (time >= 2100 && time <= 2400) 
{
    document.write("Good night!<br>");
} 
else if (time >= 0 && time < 500) 
{
    document.write("Good night!<br>");
} 
else 
{
    document.write("Invalid time entered. Please enter time in 24-hour format.<br>");
}