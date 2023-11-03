const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.DB_URL;

const dbConnection = mongoose.connect(uri).then(() => {
    console.log("connected to database");
}).catch((err) => {
    console.log("error in connecting to database ", err);
});

module.exports = dbConnection;