const pdfParse = require('pdf-parse');
const generateInterviewReport = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")




const handleGenerateInterviewReport = async (req,res)=>{

    const resumeContent=await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer)) ).getText() 
    const {selfDescription,jobDescription} = req.body

    const interviewReportByAi = await generateInterviewReport({
        resume:resumeContent.text,
        selfDescription,
        jobDescription
    })

  

    const interviewReport = await interviewReportModel.create({
        user:req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })

    return res.status(201).json({
        message:"Interview report generated successfully",
        interviewReport
    })

}



const handleGetInterviewReportById= async (req,res)=>{
    const {interviewId} = req.params

    const interviewReport = await interviewReportModel.findOne({
        _id:interviewId,
        user:req.user.id
    })

    if (!interviewReport) {
        return res.status(404).json({
            message:"Interview report not found"
        })
    }

    return res.status(200).json({
        message:"Interview report retrieved successfully",
        interviewReport
    })
}

module.exports = {
    handleGenerateInterviewReport,
    handleGetInterviewReportById
}