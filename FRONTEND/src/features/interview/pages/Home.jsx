import React , {useState}from "react";
import { AuthContext } from "../../auth/auth.context";



const Home = () => {

  const { user } = React.useContext(AuthContext);

  
  const [resumeFile, setResumeFile] = useState(null);
  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-[#e6edf3] flex flex-col items-center justify-center px-6 py-12 gap-8 font-sans">

      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">
          Create Your Custom <span className="text-pink-600">Interview Plan</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Let our AI analyze the job requirements and your unique profile to build a winning strategy.
        </p>
      </header>

      {/* Card */}
      <div className="w-full max-w-5xl bg-[#161b22] border border-[#2a3348] rounded-2xl overflow-hidden">

        {/* Body */}
        <div className="flex min-h-130">

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
              className="w-full flex-1 bg-[#1e2535] border border-[#2a3348] rounded-lg p-3 text-sm outline-none focus:border-pink-500 resize-none"
              placeholder="Paste the full job description here..."
            />

            <div className="absolute bottom-7 right-8 text-xs text-gray-400">
              0 / 5000 chars
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#2a3348]" />

          {/* Right Panel */}
          <div className="flex-1 flex flex-col gap-3 p-6">

            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="text-pink-500">👤</span>
              <h2 className="text-sm font-semibold"> {`${user?.username}'s `|| "Your"} Profile</h2>
            </div>

            {/* Upload */}
            <div className="flex flex-col gap-2">
              <label  className="text-sm font-medium  flex items-center gap-2">
                Upload Resume
                <span className="text-xs px-2 py-0.5 border border-pink-600 text-pink-600 rounded bg-pink-600/10">
                  Best Results
                </span>
                
              </label>
              <input onChange={(e)=>setResumeFile(e.target.files[0])} type="file" className="hidden" accept=".pdf" id="resume-upload" />
              

              <label htmlFor="resume-upload" className="flex flex-col  items-center justify-center gap-1 p-6 bg-[#1e2535] border-2 border-dashed border-[#2a3348] rounded-lg cursor-pointer hover:border-pink-500 hover:bg-pink-500/5 transition">
                <p className="text-sm font-medium">
                  {resumeFile ? resumeFile.name : "Click to upload or drag & drop"}
                  </p>
                <p className="text-xs text-gray-400">PDF  (Max 5MB)</p>
                {/* <p  className="text-xs text-gray-400">
                  {resumeFile ? resumeFile.name : "No file selected"}
                </p> */}
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
                className="w-full h-24 bg-[#1e2535] border border-[#2a3348] rounded-lg p-3 text-sm outline-none focus:border-pink-500 resize-none"
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

          <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-pink-500 to-pink-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 active:scale-95 transition">
            ⭐ Generate My Interview Strategy
          </button>
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