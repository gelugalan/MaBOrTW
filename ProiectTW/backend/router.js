const LoginController = require("./controllers/authentication/loginController");
const RegisterController = require("./controllers/authentication/registerController");
const EventController = require("./controllers/events/eventController");

const handleRoute = async function(req, res) {
    if (req.method === 'GET') {
        
    } else if (req.method === 'POST') {
        if (req.url === '/api/login') {
            await LoginController.loginUser(req, res);
        }
        else if (req.url === '/api/register') {
            await RegisterController.registerUser(req, res);
        } else if (req.url === '/api/createEvent') {
            await EventController.createEvent(req, res);
        }
    }
}


module.exports = {
    handleRoute
}