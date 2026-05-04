import {generateInterviewReport,getInterviewReportById,getAllReportsForUser } from '../services/interview.api'
import { useContext } from 'react'
import { InterviewContext } from '../interview.context'

export const useInterview = () => {

    const context = useContext(InterviewContext);

    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { loading, setLoading, interviewReport, setInterviewReport, allReports, setAllReports } = context;

    const generateReport = async ({jobDescription , selfDescription, resumeFile}) => {

        setLoading(true);
        try{
            const report = await generateInterviewReport({jobDescription , selfDescription, resumeFile});
            setInterviewReport(report);
        } catch (error) {
            console.error("Error generating interview report:", error);
        } finally {
            setLoading(false);
        }
    }

    const fetchReportById = async (interviewId) => {
        setLoading(true);
        try {
            const report = await getInterviewReportById(interviewId);
            setInterviewReport(report);
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

    return {
        loading,
        setLoading,
        interviewReport,
        setInterviewReport,
        allReports,
        setAllReports,
        generateReport,
        fetchReportById,
        fetchAllReportsForUser
    };
}