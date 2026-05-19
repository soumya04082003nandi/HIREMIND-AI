const pdfParse = require('pdf-parse');
const {generateInterviewReport,generateResumePdf} = require("../services/ai.service")
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


const handleGetAllInterviewReportsForUser = async (req, res) => {
  const allReports = await interviewReportModel
    .find({ user: req.user.id })   // ✅ only query here
    .sort({ createdAt: -1 })       // ✅ chain after find
    .select("-resume -jobDescription -selfDescription -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan -__v");

    return res.status(200).json({
        message:"All interview reports retrieved successfully",
        allReports
    })
//   console.log(allReports);
};

const handleGenerateResumePdf = async (req,res)=>{
  const {interviewId} = req.params

  const interviewReport =await interviewReportModel.findById(interviewId);

  if(!interviewReport){
    return res.status(404).json({
        message:"Interview report not found."
    })}
    const {resume,jobDescription,selfDescription}= interviewReport
    // console.log({
    //     resume, selfDescription,jobDescription
    // });
    
    const pdfBuffer= await generateResumePdf({resume,jobDescription, selfDescription})

    res.set({
        "Content-type":"Application/pdf",
        "Content-Disposition":`attachment; filename=resume_${interviewId}.pdf`
    })

    res.send(pdfBuffer)

}

// Deleting a specific report
const handleDeleteReport= async (req,res)=>{
    try {
        const {reportId}= req.params
        await interviewReportModel.findOneAndDelete({_id: reportId})
        return res.status(200).json({
            sucess:true,
            message: " reporte deleted from DB"
        })
    } catch (error) {
        console.log(error);
        
    }

};

module.exports = {
    handleGenerateInterviewReport,
    handleGetInterviewReportById,
    handleGetAllInterviewReportsForUser,
    handleGenerateResumePdf,
    handleDeleteReport
}