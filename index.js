require('dotenv').config()

let mongoHost = process.env.MONGO_HOST;
let mongoPort = process.env.MONGO_PORT;


console.log(mongoHost, mongoPort)