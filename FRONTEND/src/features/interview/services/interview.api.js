import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

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
  // console.log("ins api layer" , interviewId);
  
  const response = await api.get(`/api/interview/report/${interviewId}`);

  return response.data
}


//function to call the handleGetAllInterviewReportsForUser controller for fetching all reports for a specific user
export const getAllReportsForUser = async ()=>{
  const response = await api.get("/api/interview/all-reports");

  return response.data
}

