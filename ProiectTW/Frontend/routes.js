const PORT = 5500;
const PORT_API= 5000;
const ROUTE = "127.0.0.1";

const ROOT_URL = `http://${ROUTE}:${PORT}`;
const API_URL = `http://${ROUTE}:${PORT_API}`;
const ROOT_API_URL = `${API_URL}/api`;

function navigate(page)
{
    if(page == 'events')
    {
        window.location.href = `${ROOT_URL}/views/pages/events/events.html`;
        return;
    }
    if(page == 'about')
    {
        window.location.href = `${ROOT_URL}/views/pages/about/about.html`;
        return;
    }
    if (page == 'contact') {
        window.location.href = `${ROOT_URL}/views/pages/contact/contact.html`;
        return;
    }
    if(page == 'login')
    {
        window.location.href = `${ROOT_URL}/views/authentification/login/login.html`;
        return;
    }
    if(page == 'register')
    {
        window.location.href = `${ROOT_URL}/views/authentification/register/register.html`;
        return;
    }
    window.location.href = `${ROOT_URL}/views/authentification/`+page+"/"+page+".html";
}
