
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
    requestAsync(callbackForLogin,badRequest, data, RequestsUrl.POST.login);
}

