const LoginController = require("./controllers/authentication/loginController");
const RegisterController = require("./controllers/authentication/registerController");

const handleRoute = async function(req,res)
{
    if(req.method === 'GET')
    {
        if(req.url === '/api/login')
        {
            console.log("ddddddddddd");
            await LoginController.loginUser(req,res);
        }
    }
    else if(req.method === 'POST')
    {
        if(req.url === '/api/register')
        {
            await RegisterController.registerUser(req,res);
        }
        else if(req.url === '/api/products')
        {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'This is post request'}));
        }
    }
}


module.exports = {
    handleRoute
}