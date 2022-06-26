const PORT = 5500;

function navigate(page)
{
    if(page == 'events')
    {
        window.location.href = `http://127.0.0.1:${PORT}/views/pages/events/events.html`;
        return;
    }
    if(page == 'about')
    {
        window.location.href = `http://127.0.0.1:${PORT}/views/pages/about/about.html`;
        return;
    }
    if (page == 'contact') {
        window.location.href = `http://127.0.0.1:${PORT}/views/pages/contact/contact.html`;
        return;
    }
    if(page == 'login')
    {
        window.location.href = `http://127.0.0.1:${PORT}/views/authentification/login/login.html`;
        return;
    }
    if(page == 'register')
    {
        window.location.href = `http://127.0.0.1:${PORT}/views/authentification/register/register.html`;
        return;
    }
    window.location.href = `http://127.0.0.1:${PORT}/views/authentification/"+page+"/"+page+".html`;
}
