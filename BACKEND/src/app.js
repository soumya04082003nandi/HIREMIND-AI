const express = require('express');
const connectDB = require('./config/database');
const cookieParesr= require("cookie-parser")


//setting up the server
const app = express();
app.use(cookieParesr())
app.use(express.json());


/**
 * Connect to the database
 */
connectDB();

//The rout part

const authRouter=require("./routes/auth.routes")

//use of routes

app.use("/api/auth",authRouter);




module.exports = app;