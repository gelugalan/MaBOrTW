const url = require('url');
const LoginController = require("./controllers/authentication/loginController");
const RegisterController = require("./controllers/authentication/registerController");
const EventController = require("./controllers/events/eventController");

const handleRoute = async function(req, res) {
    if (req.method === 'GET') {
        const queryObject = url.parse(req.url, true).query;
        console.log(queryObject);
        if (req.url.startsWith('/api/getThemes')) {
            await EventController.getThemes(req, res, queryObject);
        } else if (req.url.startsWith('/api/filterAllEvents')) {
            await EventController.filterAllEvents(req, res, queryObject);
        } else if (req.url.startsWith('/api/filterAttendingEvents')) {
            await EventController.filterAttendingEvents(req, res, queryObject);
        } else if (req.url.startsWith('/api/getAllEventsNGoing')) {
            await EventController.getAllEventsNGoing(req, res, queryObject);
        } else if (req.url.startsWith('/api/getAllEvents')) {
            await EventController.getAllEvents(req, res, queryObject);
        } else if (req.url.startsWith('/api/getAttendingEvents')) {
            await EventController.getAttendingEvents(req, res, queryObject);
        }
    } else if (req.method === 'POST') {
        if (req.url === '/api/login') {
            await LoginController.loginUser(req, res);
        } else if (req.url === '/api/register') {
            await RegisterController.registerUser(req, res);
        } else if (req.url === '/api/createEvent') {
            await EventController.createEvent(req, res);
        } else if (req.url === '/api/updateEvent') {
            await EventController.updateEvent(req, res);
        } else if (req.url === '/api/removeEvent') {
            await EventController.removeEvent(req, res);
        } else if (req.url === '/api/addParticipant') {
            await EventController.addParticipant(req, res);
        } else if (req.url === '/api/removeParticipant') {
            await EventController.removeParticipant(req, res);
        } else if (req.url === '/api/addLike') {
            await EventController.addLike(req, res);
        } else if (req.url === '/api/removeLike') {
            await EventController.removeLike(req, res);
        } else if (req.url === '/api/addDislike') {
            await EventController.addDislike(req, res);
        } else if (req.url === '/api/removeDislike') {
            await EventController.removeDislike(req, res);
        }
    }
}


module.exports = {
    handleRoute
}