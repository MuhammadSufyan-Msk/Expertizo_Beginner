var rationList = ["Rice","Flour","Sugar","Milk",12,false];

document.write(rationList + "<br>");
//Add Items from the end of the array
rationList.push("Eggs"); 
rationList.push("Butter");
document.write("<b><br>Updated Rationlist After Push </b> <br>", rationList + "<br>");

//Remove Items from the end of the array
rationList.pop(); 
document.write("<b><br>Updated Rationlist After Pop </b> <br>", rationList + "<br>");

//Remove Items from the beginning of the array
rationList.shift(); 
document.write("<b><br>Updated Rationlist After Shift </b> <br>", rationList + "<br>");

//Add Items from the beginning of the array
rationList.unshift("<br>Salt");
document.write("<b><br>Updated Rationlist After Unshift </b>", rationList + "<br> <br>");

//Accessing an item in the array
document.write(rationList[2] + "<br>"); 
//Find the index of an item in the array
document.write("<b><br>Index of Sugar is </b> <br>", rationList.indexOf("Sugar") + "<br>"); 

//Remove an item from the array at index 2
document.write("<b><br>Splicing The Elements </b> <br>",rationList.splice(2, 1) + "<br>"); 
//Original array is changed
document.write("<b><br>Updated Rationlist After Splice </b>", rationList + "<br>"); 

//Add an item at index 2 without removing any items
rationList.splice(2, 0, "Cheese"); 
//Original array is changed
document.write("<b><br>Updated Rationlist After Splice </b>", rationList + "<br>");

//Extract a section of the array from index 2 to 4 (not including 4)
document.write("<b><br>Slice The Elements</b>",rationList.slice(0, 7) + "<br>"); 
//Original array remaindocument.write
document.write("<b><br>Updated Rationlist After Slice </b>", rationList + "<br>");

//Check if an item is in the array
document.write("<b><br>Check if Milk is in the array</b><br>",rationList.includes("Milk") + "<br>");
//Join the array into a string with a comma separator
document.write("<b><br>Join The Elements</b>",rationList.join(", ") + "<br><br>");

//Assignment Array
var studentName = ["Faisal", "Hunain", "Sufyan"]
var studentScore = [430, 400, 450]
var totalMarks = 500
for (var i =0; i<studentName.length; i++)
{
    var percentage = (studentScore[i] / totalMarks) * 100
    document.write("Score of " + studentName[i] + " is " + studentScore [i] + " Percentage " + percentage + "%<br>")
}