const mongoose = require("mongoose");
require("dotenv").config();


const blacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "token is required to be blacklisted"]
    }
}, {
    timestamps: true
});

const blacklistModel =mongoose.model("EmailBlacklist", blacklistSchema);

module.exports = blacklistModel;


