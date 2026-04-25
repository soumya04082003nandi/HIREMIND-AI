const express = require('express');
const connectDB = require('./config/database');
const cookieParesr= require("cookie-parser")
const cors =require("cors")
const callGeminiAI = require("./services/ai.service")


//setting up the server
const app = express();
app.use(cookieParesr())
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))


/**
 * Connect to the database
 */
connectDB();


//The rout part

const authRouter=require("./routes/auth.routes")

//use of routes

app.use("/api/auth",authRouter);




module.exports = app;