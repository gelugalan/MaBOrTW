

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(()=>{
        guardUser();
        setCorrectTabl();

        getThemes();
    }, 1000);
})


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
function setCorrectTabl()
{
    var buttons = document.querySelectorAll(".button");
    buttons.forEach((element,index) => {
        if(element.innerHTML != "About")
            element.classList.remove("btn-primary");
    })
    
}

const getThemes = async function()
{
    
}


