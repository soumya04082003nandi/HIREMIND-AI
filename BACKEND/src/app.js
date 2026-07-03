const express = require('express');
const connectDB = require('./config/database');
const cookieParesr= require("cookie-parser")
const cors =require("cors")


//setting up the server
const app = express();
app.use(cookieParesr())
app.use(express.json());
app.set("trust proxy", 1);

//for production deployment
app.use(cors({
    origin: "https://hiremind.online",
    credentials:true
}))

// //for local development
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials:true
// }))


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