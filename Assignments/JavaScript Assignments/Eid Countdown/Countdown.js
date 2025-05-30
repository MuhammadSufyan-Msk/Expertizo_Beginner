function eidCountDown()
{
    var nowDate = new Date()
    var eidDate = new Date("7 June 2025")
    var diff = eidDate.getTime() - nowDate.getTime()

    console.log(diff)       //Total Diff from Today to till date in mili seconds
    // var months = Math.floor(diff/(1000 * 60 * 60 * 24 * 30))
    var days = Math.floor(diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
    var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    var minutes = Math.floor(diff % (1000 * 60 * 60) / ( (1000 * 60)))
    var seconds = Math.floor(diff % (1000 * 60) / ( (1000)))

    if(seconds < 10)
    {
        seconds = "0" + seconds
    }
    if(hours <10)
    {
        hours = "0" + hours
    }
    if(minutes < 10)
    {
        minutes = "0" + minutes
    }
    if(days <10)
    {
        days = "0" + days
    }

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds
    
    if(differenceBothDate <0)
        {
        message2.style.display = "block"
        clearInterval(idClear)
        count.innerHTML = `
        <div class="days">
                <h2 id="days">00</h2><span>Days</span>
            </div>
            <div class="hours">
                <h2 id="hours">00</h2><span>Hours</span>
            </div>
            <div class="min">
                <h2 id="min">00</h2><span>Minutes</span>
            </div>
            <div class="sec">
                <h2 id="sec">00</h2><span>Seconds</span>
            </div>`
    }
}

setInterval(eidCountDown,1000)