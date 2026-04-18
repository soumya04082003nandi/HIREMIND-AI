const express=require("express")

const authController =require("../controllers/auth.controller")


const authRouter=express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public   
 */

authRouter.post('/register',authController.handleUserRegistration)



/**
 * @route POST /api/auth/login
 * @desc login a user with the help of email and password
 * @access Public   
 */


authRouter.post("/login",authController.handleUserLogin)




/**
 * @route GET /api/auth/logout
 * @desc loging out a user , clear the cookie and add the the cookie in the blacklist db
 * @access Public   
 */
authRouter.get("/logout", authController.handleUserLogout)



module.exports=authRouter;