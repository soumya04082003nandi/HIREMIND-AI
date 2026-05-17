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


 /**
  * @route GET /api/interview/report/:interviewId
  * @desc Get the interview report for a specific interview
  * @access Private
  */

 interviewRouter.get("/report/:interviewId", authMiddleware.getUser, interviewController.handleGetInterviewReportById)
  

/**
 * @route GET /api/interview/all-reports
 * @desc Get all interview reports for the current user
 * @access Private
 */

interviewRouter.get("/all-reports", authMiddleware.getUser, interviewController.handleGetAllInterviewReportsForUser)


/**
 * @route GET /api/interview/generate-resume-pdf
 * @desc Generate a PDF resume based on the candidate's resume, self description and job description using AI
 * @access Private
 */

interviewRouter.get("/generate-resume-pdf/:interviewId", authMiddleware.getUser, interviewController.handleGenerateResumePdf)

/**
 * @route DELETE /api/interview/report/:report-id
 * @description delete a specific interview report
 * @access private
 */

interviewRouter.delete("/report/:reportId", authMiddleware.getUser , interviewController.handleDeleteReport)

module.exports = interviewRouter