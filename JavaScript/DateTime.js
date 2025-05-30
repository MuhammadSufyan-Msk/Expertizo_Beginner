// //Finding Day that what is Day today
// var rightNow = new Date();
// var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var theDay = rightNow.getDay()
// console.log(day[theDay])
// console.log(rightNow) //Current Date Month Year Time TimeZone

//Eid CountDown
function eidCountDown()
{
    var nowDate = new Date()
    var eidDate = new Date("7 June 2025")
    var diff = eidDate.getTime() - nowDate.getTime()

    console.log(diff)       //Total Diff from Today to till date in mili seconds
    var months = Math.floor(diff/(1000 * 60 * 60 * 24 * 30))
    var days = Math.floor(diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
    var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(diff % (1000 * 60 * 60) / ( (1000 * 60)))
    var seconds = Math.floor(diff % (1000 * 60) / ( (1000)))
    document.getElementById("month").innerHTML = months
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

}

setInterval(eidCountDown,1000)

// console.log("Start")
// //Higher Function Element Store a Function for the given time
// setTimeout(function(){
//     console.log("After 5 Sec")
// },2000)

// console.log("End")

// setInterval(function(){
//     document.write("<h1>Hello</h1>")
// },2000)