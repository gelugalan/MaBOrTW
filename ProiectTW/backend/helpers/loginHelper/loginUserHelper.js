const requestHelper = require("../../helpers/requestHelper");
const UserPost = require("../../models/databaseModels/UserPost");

const loginUser = async function(req, res, body) {
    console.log(body);
    const { username, password } = JSON.parse(body);
    const userPost = new UserPost({
        username,
        password
    });

    let result = await UserPost.find({
        username: username.toString()
    });

    if (result.length == 0) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({}));
        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));

    console.log(JSON.stringify(result))
}


module.exports = {
    loginUser
}