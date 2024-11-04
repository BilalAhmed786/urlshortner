require('dotenv').config();
require('./database/db')
const urlrouter = require('./routes/router')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/url',urlrouter)


app.listen(process.env.PORT, () => console.log("Server running on port 5000"));