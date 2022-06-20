const URL = "http://localhost:5000/api/register";


const callbackForLogin = function(data)
{
    console.log(data);
    navigate("events");
}

const badRequest = function(data)
{
    console.log("Bad Request sorry!");
}

const getUserData = function()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;

    if(password !== confirmPassword)
    {
        document.getElementById("error").innerHTML = "Password and confirm password must be the same";
        return;
    }
        
    return {username: email, password};
}

const submitRegisterAction = function()
{
    const data = getUserData();
    requestAsync(callbackForLogin, data);
}

function requestAsync(callback, data = null){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState === 4 && request.status === 200){
            let responseJSON = JSON.parse(request.responseText);
            callback(responseJSON);
        }
        else badRequest(request);
    }
    request.open('POST', URL);
    request.send(JSON.stringify(data));
}

