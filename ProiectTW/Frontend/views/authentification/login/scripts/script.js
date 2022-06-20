const URL = "http://localhost:5000/api/login";


const callbackForLogin = function(data)
{
    window.sessionStorage.setItem('veryPrivate-SecretKey', data[0].username);
    navigate("events");
}

const badRequest = function(data)
{
    console.log("Bad Request sorry!");
    document.getElementById("error").innerHTML = "Something went wrong!";
}

const getUserData = function()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    return {username: email, password};
}

const submitLoginAction = function()
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

