import { generateInterviewReport, getInterviewReportById, getAllReportsForUser, generateResumePdf, deleteReportById } from '../services/interview.api'
import { useContext, useEffect } from 'react'
import { InterviewContext } from '../interview.context'
import { useParams } from 'react-router-dom'

export const useInterview = () => {

    const context = useContext(InterviewContext);
    const { interviewId } = useParams();

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { loading, setLoading, report, setReport, allReports, setAllReports, aiServerBusy , setAiServerBusy } = context;

    const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
        setLoading(true);
        try {
            const response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile });
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
            const response = await getInterviewReportById(interviewId);
            setReport(response.interviewReport);
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
            const response = await getAllReportsForUser();
            setAllReports(response.allReports);
        } catch (error) {
            console.error("Error fetching all interview reports for user:", error);
        } finally {
            setLoading(false);
        }
    }


    const getResumedf = async (interviewId) => {
         if (aiServerBusy) return; // 🔴 prevents accidental retry loops
        setLoading(true);
        let response = null; 
        try {
            response = await generateResumePdf({ interviewId });
            const url = window.URL.createObjectURL(new Blob([response], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.download = "resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // cleanup memory
            window.URL.revokeObjectURL(url);
            return response;
        } catch (error) {
            console.error("Error generating resume PDF:", error);
            setAiServerBusy(true); // Set the AI server busy state to true
            throw error; // re-throw the error to be handled by the caller if needed
        } finally {
            setLoading(false);
        }
    }


    const deleteReport = async (reportId) => {
        setLoading(true);
        console.log("hit, id ", reportId);
        

        try {
            const response = await deleteReportById(reportId);

           setAllReports((prev) =>
                    prev.filter((report) => report._id !== reportId)
                );
        } catch (error) {
            console.error("Error deleting the report", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // console.log("use effect ", interviewId);

        if (interviewId) {
            fetchReportById(interviewId)
        } else {
            fetchAllReportsForUser()
        }
    }, [interviewId]);


    return {
        loading,
        setLoading,
        report,
        setReport,
        allReports,
        setAllReports,
        aiServerBusy,
        setAiServerBusy,
        generateReport,
        fetchReportById,
        fetchAllReportsForUser,
        getResumedf,
        deleteReport
    };
}