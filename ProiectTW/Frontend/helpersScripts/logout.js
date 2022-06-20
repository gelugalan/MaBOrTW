
const logout = function()
{
    window.sessionStorage.removeItem('veryPrivate-SecretKey');
    navigate("login");
}