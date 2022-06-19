
const callbackForLogin = function(data)
{
    console.log("dada");
    console.log(data);
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
        callback(JSON.parse(request.responseText));
        // if(request.readyState === 4 && request.status === 200){
        //     let responseJSON = JSON.parse(request.responseText);
        //     // if(responseJSON.status === 'SUCCESS')
        //     //     callback(responseJSON.content);
            
        // }
    }
    console.log(URL);
    console.log(JSON.stringify(data));
    request.open('GET', URL);
    request.send(data);
}

