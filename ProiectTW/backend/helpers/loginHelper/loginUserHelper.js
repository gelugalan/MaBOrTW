const requestHelper = require("../../helpers/requestHelper");
const UserPost = require("../../models/databaseModels/UserPost");

const loginUser = async function(req, res, body) {
    const { username, password } = JSON.parse(body);
    const userPost = new UserPost({
        username,
        password
    });
    console.log(userPost.username, userPost.password);
    let result = await UserPost.find({
        username: username.toString()
    });

    if (result.length == 0) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({}));
        return;
    }

    console.log("result", result[0].username);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
}


module.exports = {
    loginUser
}