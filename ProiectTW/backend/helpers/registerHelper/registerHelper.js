
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

    return result;
}


module.exports = {
    loginUser
}