function toss()
{
    console.log("We are here at the Gaddafi Stadium Lahore, for the exciting battle between Karachi vs Lahore")
    var toss = Math.round(Math.random())

    if(toss == 0)
    {
        console.log("Karachi Won the Toss and elected to Bat")
        var karachiScore = innings("Karachi ")
        var lahoreScore = innings("Lahore ", karachiScore)
    }
    else
    {
        console.log("Lahore Won the Toss and elected to Bat")
        var lahoreScore = innings("Lahore ")
        var karachiScore = innings("Karachi ", lahoreScore)
    }
}

toss()

function innings(team)
{
    console.log(team, "has started the innings.")
    
    var score = 0
    var wickets = 0
    var over = 3

    for (var i=0; i<over; i++)
    {
        console.log("Over is Started ", (i+1))
        
        for(var j=1; j<=6; j++)
        {
            console.log("Ball # " + i + "." + j)
            var runs = Math.floor(Math.random()*6)
            if(runs === 0)
            {
                console.log("OUT! What a Brilliant Delivery to dismiss the batsman")
                wickets++
                if(wickets == 2)
                {
                    console.log("ALL OUT!")
                    console.log(team + "has given the target" + score)
                }
                // break overLoop;
            }
            else
            {
                score = score + runs
                console.log("Runs Scored ", runs)
            }
            

            console.log(team + "Score is " + score + "/" + wickets)
        }

        console.log()
    }
}
