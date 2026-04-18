const blacklistModel = require("../models/emailBlacklist.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()



const getUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "No token found"
        })
    }
    const isTokenBlacklisted = await blacklistModel.findOne({ token: token })

    if (isTokenBlacklisted) {
        return res.status(401).json({
            message: "Invalid token or expired token"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()

    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}

module.exports={getUser}