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

const PORT = process.env.PORT || 8080

server.listen(PORT, "0.0.0.0", ()=> console.log(`Server running on port ${PORT}`))