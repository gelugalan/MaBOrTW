const { json } = require("body-parser");

const callbackForCreateEvent = function (data) {
    console.log(data);
    return JSON.parse(data);
}

const callbackForGetEventThemes = function (data) {
    console.log(data);
    return JSON.parse(data);
}

const badRequest = function(data)
{
    console.log("Bad Request sorry!");
    document.getElementById("error").innerHTML = "Something went wrong!";
}

const submitNewEventAction = async function () {

    var username = window.sessionStorage.getItem('veryPrivate-SecretKey');

    var title = document.getElementById("event-name-id").value;
    var description = document.getElementById("event-description-id").value;
    var dateStart = document.getElementById("event-date-start-id").value;
    var dateEnd = document.getElementById("event-date-end-id").value;
    var theme = document.getElementById("event-theme-id").value;
    var ageLimit = document.getElementById("event-age-limit-id").value;

    await makeAjaxCall({username: username, title, description, dateStart, dateEnd, theme, ageLimit}, "http://ec2-44-203-76-193.compute-1.amazonaws.com:5000/api/createEvent", callbackForCreateEvent);
}

const getEventThemes = async function () {

    var username = window.sessionStorage.getItem('veryPrivate-SecretKey');

    await makeAjaxCall({username: username}, "http://ec2-44-203-76-193.compute-1.amazonaws.com:5000/api/getTheme", callbackForGetAllEventThemes);
}

const makeAjaxCall = async function (data, route, callback) {
    requestAsync(route, callback, data);
}

function requestAsync(URL, callback, data = null) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let responseJSON = JSON.parse(request.responseText);
            callback(responseJSON);
        }
        else badRequest(request);
    }
    request.open('POST', URL);
    request.send(JSON.stringify(data));
}