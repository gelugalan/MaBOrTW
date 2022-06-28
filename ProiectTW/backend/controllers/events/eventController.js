const Event = require("../../models/events/event");
const Theme = require("../../models/events/theme");
const UserPost = require("../../models/databaseModels/UserPost");


const getThemes = async function(req, res, queryObject) {
    try {
        let {
            username
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let themeResults = await Theme.find({});
        themeResults = themeResults.map(themeResult => ({
            themeName: themeResult.themeName
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ themeResults }));
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const filterAllEvents = async function(req, res, queryObject) {
    try {
        let {
            username,
            theme
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let eventResults = await Event.find({ theme: theme });
        eventResults = eventResults.map(eventResult => ({
            eventId: eventResult._id,
            theme: eventResult.theme,
            title: eventResult.title,
            description: eventResult.description,
            dateStart: eventResult.dateStart,
            dateEnd: eventResult.dateEnd,
            ageLimit: eventResult.ageLimit,
            likes: eventResult.likes,
            dislikes: eventResult.dislikes
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ eventResults }));
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const filterAttendingEvents = async function(req, res, queryObject) {
    try {
        let {
            username,
            theme
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let eventResults = await Event.find({
            theme: theme,
            participants: { $elemMatch: { username: username } }
        });
        eventResults = eventResults.map(eventResult => ({
            eventId: eventResult._id,
            theme: eventResult.theme,
            title: eventResult.title,
            description: eventResult.description,
            dateStart: eventResult.dateStart,
            dateEnd: eventResult.dateEnd,
            ageLimit: eventResult.ageLimit,
            likes: eventResult.likes,
            dislikes: eventResult.dislikes
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ eventResults }));
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const getAllEvents = async function(req, res, queryObject) {
    try {
        let {
            username
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let eventResults = await Event.find({});
        eventResults = eventResults.map(eventResult => ({
            eventId: eventResult._id,
            theme: eventResult.theme,
            title: eventResult.title,
            description: eventResult.description,
            dateStart: eventResult.dateStart,
            dateEnd: eventResult.dateEnd,
            ageLimit: eventResult.ageLimit,
            likes: eventResult.likes,
            dislikes: eventResult.dislikes
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ eventResults }));
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const getAllEventsNGoing = async function(req, res, queryObject) {
    try {

        let {
            username
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let eventResults = await Event.find({
            participants:{ $not: { $elemMatch: { username: username }}} 
        });

        eventResults = eventResults.map(eventResult => ({
            eventId: eventResult._id,
            theme: eventResult.theme,
            title: eventResult.title,
            description: eventResult.description,
            dateStart: eventResult.dateStart,
            dateEnd: eventResult.dateEnd,
            ageLimit: eventResult.ageLimit,
            likes: eventResult.likes,
            dislikes: eventResult.dislikes
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ eventResults }));
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const getAttendingEvents = async function(req, res, queryObject) {
    try {
        let {
            username
        } = queryObject;

        const authResult = await UserPost.find({
            username: username
        });
        if (authResult.length == 0) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
            return;
        }

        let eventResults = await Event.find({
            participants:{ $elemMatch: { username: username }} 
        });
        console.log(eventResults)

        eventResults = eventResults.map(eventResult => ({
            eventId: eventResult._id,
            theme: eventResult.theme,
            title: eventResult.title,
            description: eventResult.description,
            dateStart: eventResult.dateStart,
            dateEnd: eventResult.dateEnd,
            ageLimit: eventResult.ageLimit,
            likes: eventResult.likes,
            dislikes: eventResult.dislikes
        }));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ eventResults }));
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const createEvent = async function(req, res) {
    
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            console.log(body);
            let {
                username,
                theme,
                title,
                description,
                dateStart,
                dateEnd,
                ageLimit
            } = JSON.parse(body);
    
            const participants = [];
            const likes = 0;
            const dislikes = 0;
            theme= "da";
            dateStart = new Date(dateStart);
            dateEnd = new Date(dateEnd);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }
            console.log(1);
            const event = new Event({
                username,
                theme,
                title,
                description,
                dateStart,
                dateEnd,
                ageLimit,
                participants,
                likes,
                dislikes
            });
            console.log(2);

            event.save()
                .then((data) => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ id: data._id.toString() }));
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

const updateEvent = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username,
                theme,
                title,
                description,
                dateStart,
                dateEnd,
                ageLimit
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId, username: username };
            const options = { upsert: false };
            const updateDoc = {
                $set: {
                    theme: theme,
                    title: title,
                    description: description,
                    dateStart: dateStart,
                    dateEnd: dateEnd,
                    ageLimit: ageLimit
                }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const removeEvent = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                username,
                eventId
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId, username: username };
            await Event.deleteOne(filter);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const addParticipant = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $addToSet: { participants: { username: username } }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const removeParticipant = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $unset: { participants: [{ username: username }] }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const addLike = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $inc: { likes: 1 }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const removeLike = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $inc: { likes: -1 }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const addDislike = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $inc: { dislikes: 1 }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

const removeDislike = async function(req, res) {
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async() => {
            let {
                eventId,
                username
            } = JSON.parse(body);

            const authResult = await UserPost.find({
                username: username
            });
            if (authResult.length == 0) {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({}));
                return;
            }

            const filter = { _id: eventId };
            const options = { upsert: false };
            const updateDoc = {
                $inc: { dislikes: -1 }
            };
            await Event.updateOne(filter, updateDoc, options);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({}));
        })
    } catch (error) {
        console.log(error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(error));
    }
}

module.exports = {
    getThemes,
    filterAllEvents,
    filterAttendingEvents,
    getAllEvents,
    getAttendingEvents,
    createEvent,
    updateEvent,
    removeEvent,
    addParticipant,
    removeParticipant,
    addLike,
    removeLike,
    addDislike,
    removeDislike,
    getAllEventsNGoing
}