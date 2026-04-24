const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: [true, "Username is not available"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email address is already registered"]
    },
    password: {
        type: String,
        required: true
    }

}
)

const userModel = mongoose.model("users",userSchema);

module.exports=userModel;