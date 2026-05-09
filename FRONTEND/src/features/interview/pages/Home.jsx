import React, { useState } from "react";
import { AuthContext } from "../../auth/auth.context";
import { useInterview } from "../hooks/useinterview";
import { useNavigate } from "react-router-dom";
import GenerateLoader from "../components/Generateloader";

const Home = () => {
  const { loading, generateReport, allReports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const { user } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    if (!selfDescription.trim() && !resumeFile) {
      alert("Please provide either a resume or self description.");
      return;
    }

    try {
      const data = await generateReport({
        jobDescription,
        selfDescription,
        resumeFile,
      });      

      if (data && data._id) {
        navigate(`/interview/report/${data._id}`);
      }
    } catch (error) {
      console.error("Error generating report:", error);
      alert("Something went wrong. Try again.");
    }
  };

  if (loading) {
    return <GenerateLoader />;
  }

  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-[#e6edf3] flex flex-col items-center justify-center px-6 py-12 gap-8 font-sans">

      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          Create Your Custom <span className="text-pink-600">Interview Plan</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Let our AI analyze the job requirements and your profile to build a winning strategy.
        </p>
      </header>

      {/* Card */}
      <div className="w-full max-w-5xl bg-[#161b22] border border-[#2a3348] rounded-2xl overflow-hidden">

        <div className="flex min-h-125">

          {/* Left Panel */}
          <div className="flex-1 flex flex-col gap-4 p-6 relative">
            <div className="flex items-center gap-2">
              <span className="text-pink-600">📄</span>
              <h2 className="text-sm font-semibold flex-1">Target Job Description</h2>
              <span className="text-xs px-2 py-0.5 border border-pink-500 text-pink-500 rounded bg-pink-500/10">
                Required
              </span>
            </div>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              name="jobDescription"
              className="w-full flex-1 bg-[#1e2535] border border-[#2a3348] overflow-y-auto no-scrollbar rounded-lg p-3 text-sm outline-none focus:border-pink-500 resize-none"
              placeholder="Paste the full job description here..."
              maxLength={5000}
            />

            <div className="absolute bottom-7 right-8 text-xs text-gray-400">
              {jobDescription.length} / 5000 chars
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#2a3348]" />

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-3 p-6">

            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-pink-500">👤</span>
              <h2 className="text-sm font-semibold">
                {user?.username ? `${user.username}'s` : "Your"} Profile
              </h2>
            </div>

            {/* Upload */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium flex items-center gap-2">
                Upload Resume
                <span className="text-xs px-2 py-0.5 border border-pink-600 text-pink-600 rounded bg-pink-600/10">
                  Best Results
                </span>
              </label>

              <input
                type="file"
                accept=".pdf"
                id="resume-upload"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file && file.size > 5 * 1024 * 1024) {
                    alert("File size should be less than 5MB");
                    return;
                  }

                  setResumeFile(file);
                }}
              />

              <label
                htmlFor="resume-upload"
                className="flex flex-col items-center justify-center gap-1 p-6 bg-[#1e2535] border-2 border-dashed border-[#2a3348] rounded-lg cursor-pointer hover:border-pink-500 hover:bg-pink-500/5 transition"
              >
                <p className="text-sm font-medium">
                  {resumeFile ? resumeFile.name : "Click to upload or drag & drop"}
                </p>
                <p className="text-xs text-gray-400">PDF (Max 5MB)</p>
              </label>
            </div>

            {/* OR */}
            <div className="flex items-center gap-3 text-gray-400 text-xs">
              <div className="flex-1 h-px bg-[#2a3348]" />
              <span>OR</span>
              <div className="flex-1 h-px bg-[#2a3348]" />
            </div>

            {/* Self Description */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Quick Self-Description</label>
              <textarea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                name="selfDescription"
                className="w-full h-24 bg-[#1e2535] border border-[#2a3348] rounded-lg p-3 text-sm outline-none overflow-y-auto no-scrollbar  focus:border-pink-500 resize-none"
                placeholder="Briefly describe your experience..."
              />
            </div>

            {/* Info Box */}
            <div className="flex gap-2 p-3 bg-[#1b2a4a] border border-[#2d4a7a] rounded-lg text-xs text-blue-300">
              <span>ℹ️</span>
              <p>
                Either a <strong className="text-white">Resume</strong> or a{" "}
                <strong className="text-white">Self Description</strong> is required.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#2a3348]">
          <span className="text-xs text-gray-400">
            AI-Powered Strategy Generation • Approx 30s
          </span>

          <button
            onClick={handleGenerateReport}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 active:scale-95 transition disabled:opacity-50"
          >
            ⭐ Generate My Interview Strategy
          </button>
        </div>
      </div>


{/* All reports section */}
      <div className="w-full max-w-5xl mt-8">
  {/* Section Header */}
  <div className="flex items-center justify-between mb-5">
    <div>
      <h2 className="text-2xl font-bold text-white">
        My Interview Reports
      </h2>
      <p className="text-sm text-gray-400 mt-1">
        View and revisit your previously generated AI interview strategies.
      </p>
    </div>

    <div className="px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium">
      {allReports.length} Reports
    </div>
  </div>

  {/* Main Container */}
  <div className="bg-[#161b22] border border-[#2a3348] rounded-2xl p-5 shadow-xl">

    {allReports.length === 0 ? (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="text-5xl mb-4">📄</div>

        <h3 className="text-lg font-semibold text-white">
          No Reports Yet
        </h3>

        <p className="text-gray-400 text-sm mt-2 max-w-sm">
          Generate your first AI-powered interview strategy to see your reports here.
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allReports.map((report) => (
          <div
            key={report._id}
            onClick={() => navigate(`/interview/report/${report._id}`)}
            className="group relative overflow-hidden bg-[#1e2535] border border-[#2a3348] rounded-xl p-5 cursor-pointer transition-all duration-300 hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/10"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-pink-500/5 to-transparent pointer-events-none" />

            {/* Top Row */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl">
                  📑
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white line-clamp-1">
                    {report.title}
                  </h3>

                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className={`px-2 py-1 rounded-md ${report.matchScore>80 ? 'bg-green-500/70' : report.matchScore >=60? 'bg-yellow-500/50': 'bg-red-500/50'}` }>
                {report.matchScore}%
                </span>
              <span className="text-xs px-2 py-1 rounded-md bg-green-500/10 text-green-400 border border-green-500/20">
                Completed
              </span>
              </div>
            </div>

            

            {/* Footer */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#2a3348]">
              <span className="text-xs text-gray-400">
                AI Generated Report
              </span>

              <button className="text-sm text-pink-400 font-medium group-hover:translate-x-1 transition">
                View Report →
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

      {/* Footer */}
      <footer className="flex gap-6 text-xs text-gray-400">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
        <a href="#" className="hover:text-white">Help Center</a>
      </footer>
    </div>
  );
};

export default Home;