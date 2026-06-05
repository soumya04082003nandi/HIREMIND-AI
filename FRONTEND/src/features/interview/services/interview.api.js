import axios from 'axios';


// claud help
const api = axios.create({
  baseURL: "/",
  withCredentials: true,
});


// //for production
// const api = axios.create({
//   baseURL: "https://hiremind-ai-f33f.onrender.com",
//   withCredentials: true,
// });

// //for local development
// const api = axios.create({
//   baseURL: "http://localhost:3000",
//   withCredentials: true,
// });

//function to call the handleGenerateInterviewReport controller for generating the report using the AI
export const generateInterviewReport = async ({jobDescription , selfDescription, resumeFile}) => {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);
  formData.append("resume", resumeFile);
  const response = await api.post("/api/interview", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

//function to call the handleGetInterviewReportById controller for fetching any specific report based on their interviewId
export const getInterviewReportById = async (interviewId)=>{
  const response = await api.get(`/api/interview/report/${interviewId}`);
  return response.data
}


//function to call the handleGetAllInterviewReportsForUser controller for fetching all reports for a specific user
export const getAllReportsForUser = async ()=>{
  const response = await api.get("/api/interview/all-reports");
  return response.data
}


//function to call the generateResumePdf to generate the resume pdf for a specific interview report
export const generateResumePdf = async ({interviewId})=>{ 
  const response = await api.get(`/api/interview/generate-resume-pdf/${interviewId}`, {
    responseType: "blob",
  });
  return response.data
}

//function to call the handleDeleteReport controller  for deleting a report
export const deleteReportById = async (reportId)=>{
  const response = await api.delete(`/api/interview/report/${reportId}`)
    return response
}

