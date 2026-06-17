import { createContext, useState } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);
  const [allReports, setAllReports] = useState([]);
  const [aiServerBusy, setAiServerBusy]= useState(false)

  return (
    <InterviewContext.Provider
      value={{
        loading,
        setLoading,
        report,
        setReport,
        allReports,
        setAllReports,
        aiServerBusy,
        setAiServerBusy
      }}
    >
      {children}
    </InterviewContext.Provider>
  );    
};