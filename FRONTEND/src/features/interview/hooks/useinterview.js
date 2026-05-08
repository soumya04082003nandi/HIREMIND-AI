import {generateInterviewReport,getInterviewReportById,getAllReportsForUser } from '../services/interview.api'
import { useContext , useEffect} from 'react'
import { InterviewContext } from '../interview.context'
import {useParams} from 'react-router-dom'

export const useInterview = () => {

    const context = useContext(InterviewContext);
    const {interviewId} = useParams();

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { loading, setLoading, report, setReport, allReports, setAllReports } = context;

    const generateReport = async ({jobDescription , selfDescription, resumeFile}) => {

        setLoading(true);
        try{
            const response = await generateInterviewReport({jobDescription , selfDescription, resumeFile});
            setReport(response.interviewReport);
            return response.interviewReport;
        } catch (error) {
            console.error("Error generating interview report:", error);
        } finally {
            setLoading(false);
        }
    }

    const fetchReportById = async (interviewId) => {
        setLoading(true);
        try {
            // console.log("in hook layer " , interviewId);
            
            const response = await getInterviewReportById(interviewId);
            setReport(response.interviewReport);
            // setAllReports(response.interviewReport)
            return response.interviewReport;
        } catch (error) {
            console.error("Error fetching interview report by ID:", error);
        } finally {
            setLoading(false);
        }
    }

    const fetchAllReportsForUser = async () => {
        setLoading(true);
        try {
            const reports = await getAllReportsForUser();
            setAllReports(reports);
        } catch (error) {
            console.error("Error fetching all interview reports for user:", error);
        } finally {
            setLoading(false);
        }
    }

  useEffect (()=>{
    // console.log("use effect ", interviewId);
    
    if(interviewId){
        fetchReportById(interviewId)
    }else{
        fetchAllReportsForUser()
    }
  },[interviewId]);


    return {
        loading,
        setLoading,
        report,
        setReport,
        allReports,
        setAllReports,
        generateReport,
        fetchReportById,
        fetchAllReportsForUser
    };
}