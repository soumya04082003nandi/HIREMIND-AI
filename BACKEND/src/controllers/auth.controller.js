const userModel = require("../models/users.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require('dotenv').config()



/**
 * @name handleUserRegistration
 * @desc Register a new user using username, email, and password(hash)
 * @access Public       
 */

const handleUserRegistration = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {
        const existingUser = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists, please login"
            });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // create token
        const token = jwt.sign(
            {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );

        // set cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production (HTTPS)
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch (err) {
        return res.status(500).json({
            message: "Error registering user"
        });
    }
};


/**
 * @name handleUserLogin
 * @desc login a new user using  email, and password
 * @access Public       
 */


const handleUserLogin = async (req, res) => {

    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password both are required"
        })
    }

    const isUserExist = await userModel.findOne({ email: email })

    if (!isUserExist) {
        return res.status(401).json({
            message: "No account found with this email"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, isUserExist.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password missmatched"
        })
    }
    const token = jwt.sign(
        {
            id: isUserExist._id,
            email: email,
            password: password
        },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
    )

    res.cookie("token", token);
    return res.status(201).json({
        message:"User logedin successfully",
         user:{
            id:isUserExist._id,
            email: email,
            password:password
         }
    })


}

module.exports = {
    handleUserRegistration,
    handleUserLogin
};