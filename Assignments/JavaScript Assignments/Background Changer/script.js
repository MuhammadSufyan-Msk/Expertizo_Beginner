function changeColor()
{
    var colorArray = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexCode = ""
    for(var i=0; i<6; i++)
    {
        var colorIndex = (Math.floor(Math.random() * colorArray.length))
        // console.log("Color Index ",colorIndex)
        hexCode = hexCode + colorArray[colorIndex]
    }
    console.log("Hex Code ", hexCode)
    document.body.style.backgroundColor = "#" + hexCode
}