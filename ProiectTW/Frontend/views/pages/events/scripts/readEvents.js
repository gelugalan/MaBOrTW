// const { info } = require("console");

const ErrorEventsReadCallback = (err) => {} //console.log("err", err);

const readEventsCallback = function (data)
{
    var eventContainer = document.getElementById("events");
    console.log(eventContainer);
    console.log("dada",data.eventResults);

    for(var i= 0; i<data.eventResults.length; i++)
    {
        createContainerChild(eventContainer, data.eventResults[i]);
    }
}

const readEvents = () => {
    let URL = addAuthorizationQueryString('getAllEventsNGoing');
    console.log(URL);
    requestAsync(readEventsCallback, ErrorEventsReadCallback, null, URL,"GET");
}

const createContainerChild = (container, item) => {
    let eventsContainer = document.createElement("div");
    eventsContainer.classList.add("event-wrapper");
    eventsContainer.id = item.eventId;

    let top = createEventContainerTop(item);
    let bottom = createEventContainerBottom(item);
    container.appendChild(top);
    container.appendChild(bottom);

    eventsContainer.appendChild(top);
    eventsContainer.appendChild(bottom);
    
    container.appendChild(eventsContainer);
}

const createEventContainerTop = (item) => {
    let topCotainer = document.createElement("div");
    topCotainer.classList.add("top");

    var url = `http://127.0.0.1:5500/views/pages/events/events.html/#${item.eventId}`;
    var aTag = document.createElement('a');
    aTag.classList.add("share-to-facebook");
    aTag.setAttribute('href',`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    aTag.setAttribute('target',"_blank");
    aTag.setAttribute('rel',"noopener");

    aTag.innerText = "facebook";
    topCotainer.appendChild(aTag);

    let likesContainer = document.createElement("div");
    likesContainer.classList.add("likes-container");

    let likes = document.createElement("p");
    likes.classList.add("likes-count");
    likes.innerHTML = item.likes? `Likes: ${item.likes}` : "";
    likesContainer.appendChild(likes);


    let dislikes = document.createElement("p");
    dislikes.classList.add("likes-count");
    dislikes.innerHTML = item.dislikes? `Dislikes ${item.dislikes}` : "";

    likesContainer.appendChild(dislikes);
    topCotainer.appendChild(likesContainer);

    let title = document.createElement("p");
    title.classList.add("event-title");
    title.innerHTML = item.title;
    let ageLimit = document.createElement("div");
    ageLimit.classList.add("ageLimit");
    ageLimit.innerHTML = item.ageLimit;

    topCotainer.appendChild(title);
    topCotainer.appendChild(ageLimit);
    return topCotainer;
}

const getDate = (data) => {
    let currentDate = new Date(data);
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); 
    var year = currentDate.getFullYear();

    return `${date}/${month}/${year}`;
}

const createEventContainerBottom = (item) => {
    let bottom = document.createElement("div");
    bottom.classList.add("bottom");
    var description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = item.description;
    bottom.appendChild(description);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    let timingContainer = document.createElement("div");
    timingContainer.classList.add("timingContainer");
    let startEventDate = document.createElement("p");
    startEventDate.classList.add("timing-begin");
    startEventDate.innerHTML= getDate(item.dateStart)
    let endEventDate = document.createElement("p");
    endEventDate.classList.add("timing-end");
    endEventDate.innerHTML= getDate(item.dateEnd)

    timingContainer.appendChild(startEventDate);
    timingContainer.appendChild(endEventDate);
    
    let infoFooter = document.createElement("div");
    infoFooter.classList.add("infoFooter");
    let theme = document.createElement("p");
    theme.classList.add("theme");
    theme.innerHTML = item.theme;

    let joinButton = document.createElement("button");
    joinButton.classList.add("join-button");
    joinButton.innerHTML = "Join";
    joinButton.onclick = function(event) {
        const URL = 'addParticipant';
        console.log(URL);
        const key = window.sessionStorage.getItem('veryPrivate-SecretKey');
        const data = {
            username: key,
            eventId: item.eventId
        };
        const callback = function() {
            location.reload();
        }
        requestAsync(callback, ErrorEventsReadCallback, data, URL, "POST");
    }

    infoFooter.appendChild(theme);
    infoFooter.appendChild(joinButton);

    let statistics = document.createElement("div");
    statistics.classList.add("statistics-container");

    let likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.classList.add("statistics-button");
    likeButton.innerHTML = "Like";
    likeButton.onclick = function(event) {
        const URL = 'addLike';
        console.log(URL);
        const key = window.sessionStorage.getItem('veryPrivate-SecretKey');
        const data = {
            username: key,
            eventId: item.eventId
        };
        const callback = function() {
            location.reload();
        }
        requestAsync(callback, ErrorEventsReadCallback, data, URL, "POST");
    }
    statistics.appendChild(likeButton);

    let dislikeButton = document.createElement("button");
    dislikeButton.classList.add("dislike-button");
    dislikeButton.classList.add("statistics-button");
    dislikeButton.innerHTML = "Dislike";

    dislikeButton.onclick = function(event) {
        const URL = 'addDislike';
        console.log(URL);
        const key = window.sessionStorage.getItem('veryPrivate-SecretKey');
        const data = {
            username: key,
            eventId: item.eventId
        };
        const callback = function() {
            location.reload();
        }
        requestAsync(callback, ErrorEventsReadCallback, data, URL, "POST");
    }
    statistics.appendChild(dislikeButton);


    infoContainer.appendChild(timingContainer);
    infoContainer.appendChild(infoFooter);
    infoContainer.appendChild(statistics);
    bottom.appendChild(infoContainer);

    return bottom;
}