
const requestHelper = require("../../helpers/requestHelper");
const UserPost = require("../../models/databaseModels/UserPost");

const loginUser = async function(req,res,body)
{
    const { username, password } = JSON.parse(body);
    const userPost = new UserPost({
        username,
        password
    });

    let result =  await UserPost.find(
        {
            username: username.toString()
        }
    );

    console.log("result", result[0].username);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
}


module.exports = {
    loginUser
}