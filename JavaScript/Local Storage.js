document.getElementById("signupHandler").addEventListener("click", function()
    {
        var userName = document.getElementById("UserName").value;
        var userEmail = document.getElementById("UserEmail").value;
        var userPassword = document.getElementById("UserPassword").value;
        var confirmPassword = document.getElementById("UserConfirmPassword").value;
        var userImage = document.getElementById("UserImage").files[0];

        console.log(userName, userEmail, userPassword, confirmPassword, userImage)

        if (!userName || !userEmail || !userPassword || !confirmPassword || !userImage)
            {
                alert("Please fill all the fields");
                return;
            }

        if (userPassword.length < 8)
        {
            alert("Password must be at least 8 characters long");
            return;
        }

        if (userPassword !== confirmPassword)
        {
            alert("Passwords do not Match");
            return;
        }
    }
)