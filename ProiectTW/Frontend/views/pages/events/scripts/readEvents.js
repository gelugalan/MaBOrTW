const { info } = require("console");

const ErrorEventsReadCallback = (err) => {} //console.log("err", err);

const readEventsCallback = function (data)
{
    console.log(data.eventResults);
    var eventContainer = document.createElement("div");
    createContainerChild(eventContainer);
}

const readEvents = () => {
    let URL = addAuthorizationQueryString('getAllEvents');
    requestAsync(readEventsCallback, ErrorEventsReadCallback, null, URL,"GET");
}

const createContainerChild = (container) => {
    let top = createEventContainerTop();
    let bottom = createEventContainerBottom();

    container.appendChild(top);
    container.appendChild(bottom);
}

const createEventContainerTop = () => {
    let top = document.createElement("div");
    top.classList.add("top");
    let title = document.createElement("p").classList.add("event-title");
    let ageLimit = document.createElement("div").classList.add("ageLimit");

    top.appendChild(title);
    top.appendChild(ageLimit);
    return top;
}

const createEventContainerBottom = () => {
    let bottom = document.createElement("div").classList.add("bottom");
    var description = document.createElement("div").classList.add("description");
    bottom.appendChild(description);

    let infoContainer = document.createElement("div").classList.add("info-container");

    let timingContainer = document.createElement("div").classList.add("timingContainer");
    let startEventDate = document.createElement("p").classList.add("timing-begin");
    let endEventDate = document.createElement("p").classList.add("timing-end");

    timingContainer.appendChild(startEventDate);
    timingContainer.appendChild(endEventDate);
    
    let infoFooter = document.createElement("div").classList.add("infoFooter");
    let theme = document.createElement("p").classList.add("theme");
    let joinButton = document.createElement("button").classList.add("join-button");

    infoFooter.appendChil(theme).appendChil(joinButton);

    infoContainer.appendChil(timingContainer);
    infoContainer.appendChil(infoFooter);
    bottom.appendChil(infoContainer);

    return bottom;
}

