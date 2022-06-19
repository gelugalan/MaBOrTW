


const callbackForLogin = function(data)
{
    console.log("dada", data);
}

const badRequest = function(data)
{
    
}

const submitLoginAction = async function()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    await makeAjaxCall({username: email, password}, "http://localhost:5000/api/login", callbackForLogin)
}

const makeAjaxCall = async function(data,route, callback)
{
    requestAsync(route, callback, data);
}

function requestAsync(URL, callback, data = null){
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

