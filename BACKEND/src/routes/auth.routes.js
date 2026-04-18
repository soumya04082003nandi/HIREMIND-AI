const express=require("express")
const authController =require("../controllers/auth.controller")
const authRouter=express.Router();
const authUser = require("../middlewares/auth.middleware")

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


/**
 * @route GET /api/auth/get-user
 * @description fetching the details about the loged in user
 * @access private
 */
authRouter.get("/get-user",authUser.getUser,authController.handlerGetUser)





module.exports=authRouter;