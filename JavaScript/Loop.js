//Front Counting
for (var i = 0; i <= 5; i++)
{
    //Code of Block / Code of Execution
    document.write("The value of i is: ", i + "<br>");
}
document.write("------------------------------<br>");

//Reverse Counting
for (var i = 5; i >= 0; i--)
{
    //Code of Block / Code of Execution
    document.write("The value of i is: ", i + "<br>");
}
document.write("------------------------------<br>");

//Incremental Counting
for (var i = 0; i <= 100; i += 10)
{
    //Code of Block / Code of Execution
    document.write("The value of i is: ", i + "<br>");
}
document.write("------------------------------<br>");

//Nested Loop
for (var i = 1; i <=100; i += 10)
{
    console.log("Order Loop")
    for (var j=i; j<i+10; j++)
    {
        console.log("Inner Loop");
        document.write(j + " ");
    }
    document.write("<br>")
}
document.write("------------------------------<br>");

//Number Table
var tableNum = Number(prompt("Enter the number of table you want"));
var length = Number(prompt("Set the length of the table"));

for (var i = 1; i<=length; i++)
{
    document.write(tableNum + " * " + i + " = " + (tableNum * i) + "<br>");
}
document.write("------------------------------<br>");

//Flag in Loop
var found = false;
var numbers = [10, 20, 30, 40];
var search = 30;
