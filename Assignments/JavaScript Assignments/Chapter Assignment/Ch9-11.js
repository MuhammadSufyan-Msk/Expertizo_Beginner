//Chapter 9-11

//Point 1
document.write("<h1>Chapter 9-11</h1>");
document.write("Point 1<br>");
var city = prompt("Enter your city name: ");
if (city == "Karachi") 
{
    alert("Welcome to city of lights");
}
else    
{
    alert("Welcome to " + city);
}
document.write("------------------------------<br>");

//Point 2
document.write("Point 2<br>");
var gender = prompt("Enter Your Gender");
if (gender == "Male")
{
    document.write("Good Morning Sir.<br>");
}
else if (gender == "Female")
{
    document.write("Good Morning Ma'am.<br>");
}
else
{
    document.write("Identify Your Self First <br>");
}
document.write("------------------------------<br>");

//Point 3 
document.write("Point 3<br>");
var trafficLight = prompt("What is the Color of Signal?")
if (trafficLight == "Red")
{
    document.write("Must Stop");
}
else if(trafficLight == "Yellow")
{
    document.write("Ready to Move");
}
else if (trafficLight == "Green")
{
    document.write("Move Now");
}
else
{
    document.write("Traffic Signals Out of Order<br>");
}
document.write("------------------------------<br>");

//Point 4 
document.write("Point 4<br>");
var carFuel = prompt("Enter Fuel in Ltr");
if (carFuel <= 0.25)
{
    document.write("Please refill the fuel in your car<br>");
}
else
{
    document.write("Car Fuel is OK<br>");
}
document.write("------------------------------<br>");

//Point 5
document.write("Point 5<br>");
var a = 4; 
if (++a === 5)
{ 
    alert("Given Condition for Variable a is True <br>");
}

var b = 82;
if (b++ === 83)
{ 
    alert("Given Condition For Variable b is True <br>"); 
}

var c = 12; 
if (c++ === 13)
{ 
    alert("Condition 1 is True <br>"); 
} 
if (c === 13)
{ 
    alert("Cndition 2 is True"); 
} 
if (++c < 14)
{ 
    alert("Condition 3 is True"); 
}
if(c === 14)
{ 
    alert("Condition 4 is True"); 
}

var materialCost = 20000; 
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ 
    alert("The Cost Equals"); 
}

if (true)
{ 
    alert("True"); 
} 
if (false)
{ 
    alert("False");
}
if("Car" < "Cat")
{ 
    alert("Car is smaller than Cat"); 
}
document.write("------------------------------<br>");

//Point 6
document.write("Point 6<br>");
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");
var totalMarks = 100;
var marks1 = prompt("Enter the marks obtained in " + subject1 + ":");
var marks2 = prompt("Enter the marks obtained in " + subject2 + ":");
var marks3 = prompt("Enter the marks obtained in " + subject3 + ":");
var totalObtainedMarks = parseInt(marks1) + parseInt(marks2) + parseInt(marks3);
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
document.write("<h2>MarkSheet</h2>");
document.write("Total Marks: " + (totalMarks * 3) + "<br>");
document.write("Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
if(percentage >= "80")
{
    document.write("Grade: A-One <br>");
    document.write("Remarks: Excellent <br>");
}
else if(percentage >= "70")
{
    document.write("Grade: A <br>");
    document.write("Remarks: Good <br>");
}
else if(percentage >= "60")
{
    document.write("Grade: B <br>");
    document.write("Remarks: You Need to Improve <br>");
}
else
{
    document.write("Remarks: Sorry <br>");
}
document.write("------------------------------<br>");
//Point 7
document.write("Point 7<br>");
// var secretNumber = prompt("Enter the Number");
document.write("------------------------------<br>");

//Point 8
document.write("Point 8<br>");
var number = prompt("Enter a number to check if it's divisible by 3:");

// Check if the number is divisible by 3
if (number % 3 === 0) 
{
    document.write("The number is divisible by 3.<br>");
} 
else 
{
    document.write("The number is NOT divisible by 3.<br>");
}
document.write("------------------------------<br>");

//Point 9
document.write("Point 9<br>");
var number = prompt("Enter a number to check if it's even or odd:");

  // Check if the number is even or odd
if (number % 2 === 0) 
{
    document.write("The number is Even.<br>");
} 
else 
{
    document.write("The number is Odd.<br>");
}
document.write("------------------------------<br>");

//Point 10
document.write("Point 10<br>");
var temperature = prompt("Enter the temperature:");

// Display message based on temperature
if (temperature > 40) 
{
    document.write("It is too hot outside.");
} 
else if (temperature > 30) 
{
    document.write("The Weather today is Normal.");
} 
else if (temperature > 20) 
{
    document.write("Today’s Weather is cool.");
} 
else if (temperature > 10) 
{
    document.write("OMG! Today’s weather is so Cool.");
} 
else 
{
    document.write("It's really cold outside!");
}
document.write("------------------------------<br>");

//Point 11
document.write("Point 11<br>");
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