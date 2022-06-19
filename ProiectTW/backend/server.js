const http = require('http')
const mongoose = require("mongoose");
const LoginController = require("./controllers/authentication/loginController");
const Router = require("./router");
require('dotenv/config');


const server = http.createServer(async (req,res)=>{
    await Router.handleRoute(req,res);
})


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true} , () => {
    console.log('connected to DB!');
} )

const PORT = 5000

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))