//Chapter 6-9
//Point 1
document.write("<h1>Chapter 6-9</h1>");
document.write("Point 1<br>");
var a = 10;
document.write("<br>The value of a is: " + a + "<br>");
document.write("------------------------------<br>");
document.write("<br>The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("------------------------------<br>");
//Point 2
document.write("Point 2<br>");
var b = 2, c = 1;
var result = (((--b) - (--c)) + ((++c) + (c--)));
document.write("<br>Result is: " + result + "<br>");
document.write("Explanation of Output Each Stage:<br>");
document.write("1. --b: 2-1 = 1 <br>");
document.write("2. --c: 1-1 = 0<br>");
document.write("3. ++c: 0+1 = 1<br>");
document.write("4. c--: 1-1 = 0<br>");
document.write("Final result: 1 - 0 + 1 + 0 = 2<br>");
document.write("------------------------------<br>");
//Point 3
document.write("Point 3<br>");
var name = prompt("Enter your name:");
var message = "Hello " + name + "!";
document.write("<br>" + message + "<br>");
document.write("------------------------------<br>");
//Point 5
document.write("Point 5<br>");
var num = prompt("Enter a number:");
var defaultNum = 5;
if (num > 0)
{
    for (var i = 1; i <= 10; i++)
    {   
        document.write(num + " x " + i + " = " + (num * i) + "<br>");
    }
}
else if(num == "")
{
    num = defaultNum;
    for (var i = 1; i <= 10; i++)
        {   
            document.write(defaultNum + " x " + i + " = " + (defaultNum * i) + "<br>");
        }
}
else if(num < 0)
{
    document.write("Please enter a positive number<br>");
}
else
{
    document.write("Please enter a valid number<br>");
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
document.write("<br>Subject 1: " + subject1 + "<br>");
document.write("Marks Obtained: " + marks1 + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("<br>Subject 2: " + subject2 + "<br>");
document.write("Marks Obtained: " + marks2 + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("<br>Subject 3: " + subject3 + "<br>");
document.write("Marks Obtained: " + marks3 + "<br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("<br>Total Marks Obtained: " + totalObtainedMarks + "<br>");
document.write("Total Marks: " + (totalMarks * 3) + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("------------------------------<br>");