const LoginModel = require("../../models/authentication/loginModel");
const requestHelper = require("../../helpers/requestHelper");
const UserPost = require("../../models/databaseModels/UserPost");


const registerUser = async function loginUser(req,res)
{
    try {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async ()=>{
            const { username, password } = JSON.parse(body);
            const userPost = new UserPost({
                username,
                password
            });

            userPost.save()
            .then((data) => {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(data));
            })
            .catch(err => {
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(err));
            })
        })

        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    registerUser
}