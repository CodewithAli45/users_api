const experss = require('express');
const cors = require('cors');
const dbConnection = require('./db');
const userRouter = require('../routes/userRoute');
const authRouter = require('../routes/authRoute');

const app = experss();

app.use(experss.json());
app.use(cors());

dbConnection();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;