const express = require('express');
const connectDB = require('./config/database');
const cookieParesr= require("cookie-parser")
const cors =require("cors")


//setting up the server
const app = express();
app.use(cookieParesr())
app.use(express.json());
app.use(cors({
    origin: "https://hiremind-ai-git-main-soumyanandi2003-4990s-projects.vercel.app",
    credentials:true
}))


/**
 * Connect to the database
 */
connectDB();


//importing routes
const authRouter=require("./routes/auth.routes")
const interviewRouter= require("./routes/interview.routes")

//use of routes
app.use("/api/auth",authRouter);

app.use("/api/interview",interviewRouter)




module.exports = app;