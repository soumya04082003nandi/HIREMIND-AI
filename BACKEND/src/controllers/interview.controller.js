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

  

    console.log(interviewReportByAi);
  const formattedReport = {
        ...interviewReportByAi,
        technicalQuestions: interviewReportByAi.technicalQuestions?.map(q => ({ question: q })),
        behavioralQuestions: interviewReportByAi.behavioralQuestions?.map(q => ({ question: q })),
        skillGaps: interviewReportByAi.skillGaps?.map(s => ({ skill: s })),
        preparationPlan: interviewReportByAi.preparationPlan?.map(p => ({ step: p }))
    };    

    const interviewReport = await interviewReportModel.create({
        user:req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...formattedReport
    })

    return res.status(201).json({
        message:"Interview report generated successfully",
        interviewReport
    })

}



module.exports = {
    handleGenerateInterviewReport
}