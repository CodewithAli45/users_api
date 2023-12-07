const experss = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const router = require('../routes/userRoute');

const app = experss();

app.use(experss.json());
app.use(cors());

dbConnection();

app.use('/api/v1/users', router);
module.exports = app;