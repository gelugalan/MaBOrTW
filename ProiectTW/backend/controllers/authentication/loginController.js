const requestHelper = require("../../helpers/requestHelper");
const UserPost = require("../../models/databaseModels/UserPost");
const LoginUserHelper = require("../../helpers/loginHelper/loginUserHelper");

const loginUser = async function loginUser(req,res)
{
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async ()=>{
            let data = await LoginUserHelper.loginUser(req,res, body);
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    loginUser
}