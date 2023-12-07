const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.DB_URL;

const dbConnection = async() => {
    try {
        await mongoose.connect(url);
        console.log("Connected to database - Mongodb Atlas");
        console.log("Host is ", mongoose.connection.host);
    } catch (error) {
        throw Error("something went wrong in connecting to database ", error);
    }
}

module.exports = dbConnection;