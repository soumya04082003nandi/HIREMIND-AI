const express=require("express")

const authController =require("../controllers/auth.controller")


const authRouter=express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public   
 */

authRouter.post('/register',authController.handleUserRegistration)


 
module.exports=authRouter;