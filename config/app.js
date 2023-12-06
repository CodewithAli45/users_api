const experss = require('express');
const cors = require('cors');
const dbConnection = require('./db');

const app = experss();

app.use(experss.json());
app.use(cors());

dbConnection();

module.exports = app;