function navigate(page)
{
    if(page == 'events')
    {
        window.location.href = "http://127.0.0.1:5500/ProiectTW/Frontend/views/pages/events/events.html";
        return;
    }
    if(page == 'about')
    {
        window.location.href = "http://127.0.0.1:5500/ProiectTW/Frontend/views/pages/about/about.html";
        return;
    }
    if (page == 'contact') {
        window.location.href = "http://127.0.0.1:5500/ProiectTW/Frontend/views/pages/contact/contact.html";
        return;
    }
    window.location.href = "http://127.0.0.1:5500/ProiectTW/Frontend/views/authentification/"+page+"/"+page+".html";
}