const Event = require("../../models/events/event");
const UserPost = require("../../models/databaseModels/UserPost");
const LoginUserHelper = require("../../helpers/loginHelper/loginUserHelper");


const createEvent = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                username,
                theme,
                title,
                description,
                dateStart,
                dateEnd,
                ageLimit
            } = JSON.parse(body);

            participants = []
            dateStart = new Date(dateStart);
            dateEnd = new Date(dateEnd);

            const authResult = await UserPost.find({
                username: username
            });
            console.log(authResult);
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const event = new Event({
                username,
                theme,
                title,
                description,
                dateStart,
                dateEnd,
                ageLimit,
                participants
            });

            event.save()
                .then((data) => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({}));
                })
                .catch(err => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(err));
                })
        })


    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}


module.exports = {
    createEvent
}