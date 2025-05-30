function greet()
{
    document.write("<h1>Welcome</h1>")
}
greet()

function loop()
{
    for(var i = 0; i<=10; i++)
    {
        document.write(i + " " )
    }
}
loop()

function mySum(num1 = 5, num2 = 7)
{
    var result = num1 + num2
    return result
        document.write(result)
}
document.write("<br>" + mySum())

function checkPalindrome()
{
    var input = document.getElementById("input").value
    document.write("User Value = ", input)
    var resultValue = " "
    var isCheck = false
    
    for (var i=0; i<=10; i++)
    {
        document.write(input[i])
        resultValue = resultValue + input[i]
        if (resultValue === input)
            {
                isCheck = true;
            }
    }

    if(isCheck)
    {
        document.write("It is Palindrome")
        hide.style.display = "block"
        hide.innerHTML = "It is " + input +  
    }


    // document.write(resultValue)
}