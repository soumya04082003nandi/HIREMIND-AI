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
 * @desc Rlogin a user with the help of email and password
 * @access Public   
 */


authRouter.post("/login",authController.handleUserLogin)





module.exports=authRouter;