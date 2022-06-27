const setCorrectTabl = function() {
    var buttons = document.querySelectorAll(".button");
    buttons.forEach((e, x) => {
        e.addEventListener("click", (focusButton) => {
            buttons.forEach((element, index) => {
                element.classList.remove("btn-primary");
            })
            e.classList.add("btn-primary");
        })
    })
}

// function setCorrectTabl()
// {
//     var buttons = document.querySelectorAll(".button");
//     buttons.forEach((element,index) => {
//         if(element.innerHTML != "About")
//             element.classList.remove("btn-primary");
//     })

// }


document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        guardUser();
        setCorrectTabl();

        readEvents();
    }, 1000);
})