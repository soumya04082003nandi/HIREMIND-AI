const mongoose = require('mongoose');

require('dotenv').config();



const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,)  

        console.log("Database is connected")
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}
module.exports = connectDB; 