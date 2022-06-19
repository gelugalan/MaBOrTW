

const loginUser = function(user)
{
    return new Promise((resolve, reject) => {
        resolve({username: "Emil", password: "dada"});
    })
}


module.exports = {
    loginUser
}