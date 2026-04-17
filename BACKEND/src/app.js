const express = require('express');
const connectDB = require('./config/database');


//setting up the server
const app = express();


/**
 * Connect to the database
 */
connectDB();

//The rout part

const authRouter=require("./routes/auth.routes")

//use of routes

app.use("/api/auth",authRouter);



app.use(express.json());

module.exports = app;