const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/userRoutes');
const dbConnection = require('./database/db');

const port = process.env.PORT;

const app = express();
app.use(cors());

app.use(express.json());

dbConnection;
app.use('/api/v1', router);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
})
