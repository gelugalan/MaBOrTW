

const RequestsUrl = {
    GET: {
        getThemes: 'getThemes',
        filterAllEvents:'filterAllEvents',
        filterAttendingEvents: 'filterAttendingEvents',
        getAllEvents: 'getAllEvents',
        getAttendingEvents:'getAttendingEvents'
    },
    POST: {
        login: 'login',
        register: 'register',
        createEvent: 'createEvent',
        updateEvent: 'updateEvent',
        removeEvent: 'removeEvent',
        addParticipant:'addParticipant',
        removeParticipant: 'removeParticipant',
        addLike: 'addLike',
        removeLike:'removeLike',
        addDislike:'addDislike',
        removeDislike:'removeDislike'
    }
}

const buildURL = (route) => `${ROOT_API_URL}/${route}`;

function addAuthorizationQueryString(route)
{
    let key = window.sessionStorage.getItem('veryPrivate-SecretKey');
    return `${route}?username=${key}`;
}

function requestAsync(callback, badRequest, data = null, route = null, method = "POST"){
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if(request.readyState === 4 && request.status === 200){
            let responseJSON = JSON.parse(request.responseText);
            callback(responseJSON);
        }
        else badRequest(request);
    }
    request.open(method, buildURL(route));
    request.send(data != null? JSON.stringify(data) : null);
}