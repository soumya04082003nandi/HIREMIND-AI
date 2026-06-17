import {Link} from "react-router-dom"
import { PenLine,Waypoints,FileUser } from "lucide-react";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0d1117] via-[#111827] to-[#020617] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-125 h-125 bg-blue-500 rounded-full blur-[160px] opacity-20 -top-25 -left-25"></div>
        <div className="absolute w-125 h-125 bg-purple-500 rounded-full blur-[160px] opacity-20 -bottom-37.5 -right-25"></div>
      </div>

      

      {/* Hero Section */}
      <section className="text-center px-6 pt-24 pb-16 max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Get Hire Ready <br />
          <span className=" cursiv ">with</span>
          <span className="text-pink-600 "> HireMind</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          An AI-powered platform to enhance your interview preparation. Generate interview report, Refine your resume and get job-ready with confidence.        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link to={"/home"} className="bg-pink-600 hover:bg-pink-700 cursor-pointer active:scale-95 transition px-6 py-3 rounded-xl font-medium">
          Generate Report
          </Link>


        </div>

      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-pink-600 text-xl flex items-center gap-2 font-semibold"><PenLine color="#ffff" strokeWidth={1.5} />Generate Report</h3>
          <p className="text-gray-400 mt-2">
            Generate an interview report based on your targeted JD, Self description and Resume.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-pink-600  flex gap-2 items-center text-xl font-semibold"><Waypoints color="#ffffff" strokeWidth={1.5} /> Roadmap</h3>
          <p className="text-gray-400 mt-2">
            A proper preparation plan for your interview along with Technical/Behavioral questions with ans.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition">
          <h3 className="text-pink-600 text-xl flex items-center gap-2 font-semibold"><FileUser color="#ffffff" strokeWidth={1.5} />Generate Resume</h3>
          <p className="text-gray-400 mt-2">
            Generate an ATS friendly resume, best for your targated job.
          </p>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="text-center px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">About HireMind-<span className="text-pink-600">AI</span> </h2>
        <p className="text-gray-400 text-sm mt-4">
        HireMind AI is a modern AI-powered platform designed to help users prepare for interviews and improve their resumes with confidence. Built with a clean and user-friendly interface, it helps students and job seekers become more job-ready and stand out in today's competitive hiring process.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-white/10">
        © {new Date().getFullYear()} HireMind-AI. Built with ❤️
      </footer>

    </div>
  );
}
