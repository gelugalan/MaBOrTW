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
    // data.eventResults.each(element => {
    //     createContainerChild(eventContainer, element);
    // });
}

const readEvents = () => {
    let URL = addAuthorizationQueryString('getAllEvents');
    console.log(URL);
    requestAsync(readEventsCallback, ErrorEventsReadCallback, null, URL,"GET");
}

const createContainerChild = (container, item) => {
    let eventsContainer = document.createElement("div");
    eventsContainer.classList.add("event-wrapper");
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
    let title = document.createElement("p");
    title.classList.add("event-title");
    title.innerHTML = item.title;
    let ageLimit = document.createElement("div");
    ageLimit.classList.add("ageLimit");
    title.innerHTML = item.ageLimit;

    topCotainer.appendChild(title);
    topCotainer.appendChild(ageLimit);
    return topCotainer;
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
    startEventDate.innerHTML= Date.parse(item.dateStart);
    let endEventDate = document.createElement("p");
    endEventDate.classList.add("timing-end");
    startEventDate.innerHTML= Date.parse(item.dateEnd);

    timingContainer.appendChild(startEventDate);
    timingContainer.appendChild(endEventDate);
    
    let infoFooter = document.createElement("div");
    infoFooter.classList.add("infoFooter");
    let theme = document.createElement("p");
    theme.classList.add("theme");
    theme.innerHTML = item.theme;

    let joinButton = document.createElement("button");
    joinButton.classList.add("join-button");

    infoFooter.appendChild(theme);
    infoFooter.appendChild(joinButton);

    infoContainer.appendChild(timingContainer);
    infoContainer.appendChild(infoFooter);
    bottom.appendChild(infoContainer);

    return bottom;
}