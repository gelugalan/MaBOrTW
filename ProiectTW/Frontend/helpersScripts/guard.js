

const guardUser = function()
{
    if(window.sessionStorage.getItem('veryPrivate-SecretKey') === undefined)
        navigate("login");
}