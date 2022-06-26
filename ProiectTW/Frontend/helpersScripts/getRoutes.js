const BaseURL = "http://ec2-44-203-76-193.compute-1.amazonaws.com:5000/api/";

const getRoutesFor = function(page)
{
    switch(page)
    {
        case "login" : return BaseURL + "login";
        case "register" : return BaseURL + "register";

        default: return BaseURL;
    }
}