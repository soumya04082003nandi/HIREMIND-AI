const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware")
const interviewController= require("../controllers/interview.controller")
const upload = require("../middlewares/file.middleware")

const interviewRouter = express.Router()

/**
 *  @route POST /api/interview/generate-report
 *  @desc Generate an interview report for a candidate based on their resume, self description and the job description using AI
 *  @access Private
 */
 interviewRouter.post("/",authMiddleware.getUser, upload.single("resume"), interviewController.handleGenerateInterviewReport)



module.exports = interviewRouter