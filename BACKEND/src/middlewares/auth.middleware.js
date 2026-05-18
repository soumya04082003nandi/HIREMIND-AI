const blacklistModel = require("../models/emailBlacklist.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()



 const getUser = (req, res, next) => {
    const token = req.cookies.token;
    console.log("MIddleware hit");
    
    

    // 1. Check cookie exists
    if (!token) {
        return res.status(401).json({
            message: "No token found, unauthorized"
        });
    }

    try {
        // 2. Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // 3. Attach user to request
        req.user = decoded;

        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = {
    getUser
};


