



const setCorrectTabl = function()
{
    var buttons = document.querySelectorAll(".button");
    buttons.forEach((e,x)=>
    {
        e.addEventListener("click", (focusButton)=>
        {
            buttons.forEach((element,index) => {
                element.classList.remove("btn-primary");
            })
            e.classList.add("btn-primary");
        })
    })
}

const readThemesCallback = (data) => {
    console.log(data.themeResults);
    let themeContainer = document.getElementById("search-input");
    if(themeContainer === null) return;
    for(var i = 0; data.themeResults.length; i++)
    {
        console.log(data.themeResults[i].themeName);
        let tagOption = document.createElement("option");
        tagOption.setAttribute('value', data.themeResults[i].themeName);
        tagOption.innerHTML = data.themeResults[i].themeName;
        themeContainer.appendChild(tagOption);
    }
}

const setThemesInFilter = () => {
    let URL = addAuthorizationQueryString('getThemes');
    console.log(URL);
    requestAsync(readThemesCallback, ()=> {}, null, URL,"GET");
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(()=>{
        guardUser();
        setCorrectTabl();

        setThemesInFilter();
        readEvents();
    }, 1000);
})


const redirectToCreateEvent = () => navigate("createEvent");