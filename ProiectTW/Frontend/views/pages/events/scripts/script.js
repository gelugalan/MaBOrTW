

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(()=>{
        guardUser();
        var buttons = document.querySelectorAll(".button");
        buttons.forEach((e,x)=>
        {
            e.addEventListener("click", (focusButton)=>
            {
                buttons.forEach((element,index) => {
                    element.classList.remove("btn-primary");
                })
                //console.log("dadaadad");
                //focusButton.srcElement.classList. // = [...focusButton.srcElement.classList, "btn-primary"];
                e.classList.add("btn-primary");
            })
        })
    }, 1000);
})


function setCorrectTabl()
{
    var buttons = document.querySelectorAll(".button");
    buttons.forEach((element,index) => {
                    
                    if(element.innerHTML != "About")
                        element.classList.remove("btn-primary");
                })
    
}

