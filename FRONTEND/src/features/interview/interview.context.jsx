import { createContext, useState } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
  const [report, setreport] = useState(null);
  const [allReports, setAllReports] = useState([]);

  return (
    <InterviewContext.Provider
      value={{
        loading,
        setLoading,
        report,
        setreport,
        allReports,
        setAllReports
      }}
    >
      {children}
    </InterviewContext.Provider>
  );    
};