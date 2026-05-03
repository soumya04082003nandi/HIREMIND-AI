import React, { useState } from "react"

const NAV_ITEMS = [
  { id: "technical", label: "Technical" },
  { id: "behavioral", label: "Behavioral" },
  { id: "roadmap", label: "Roadmap" },
]

const dummyReport = {
  matchScore: 85,
  technicalQuestions: [
    { question: "Explain event loop?", intention: "Check async understanding", answer: "Event loop handles async tasks..." },
  ],
  behavioralQuestions: [
    { question: "Tell me about yourself", intention: "Communication skill", answer: "I am a developer..." },
  ],
  preparationPlan: [
    { day: 1, focus: "JavaScript Basics", tasks: ["Closures", "Promises"] },
  ],
  skillGaps: [
    { skill: "DSA", severity: "high" },
    { skill: "System Design", severity: "medium" },
  ],
}

// ── Question Card ────────────────────────
const QuestionCard = ({ item, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300">
      
      <div
        onClick={() => setOpen(!open)}
        className="flex items-start gap-3 p-4 cursor-pointer"
      >
        <span className="text-xs font-bold text-pink-400 bg-pink-400/10 px-2 py-1 rounded-md">
          Q{index + 1}
        </span>

        <p className="flex-1 text-sm text-gray-200 leading-relaxed">
          {item.question}
        </p>

        <span className={`transition-transform duration-300 ${open ? "rotate-180 text-pink-400" : "text-gray-400"}`}>
          ▼
        </span>
      </div>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-white/10">
          <div>
            <span className="text-[10px] font-semibold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded">
              Intention
            </span>
            <p className="text-sm text-gray-400 mt-1">{item.intention}</p>
          </div>

          <div>
            <span className="text-[10px] font-semibold text-green-400 bg-green-400/10 px-2 py-0.5 rounded">
              Answer
            </span>
            <p className="text-sm text-gray-400 mt-1">{item.answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Roadmap ─────────────────────────────
const RoadMapDay = ({ day }) => (
  <div className="relative pl-12 py-4 group">
    <div className="absolute left-4 top-6 w-3 h-3 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50" />

    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 group-hover:bg-white/10 transition">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs text-pink-400 bg-pink-400/10 px-2 py-1 rounded-full">
          Day {day.day}
        </span>
        <h3 className="text-sm font-semibold text-white">{day.focus}</h3>
      </div>

      <ul className="space-y-1 text-sm text-gray-400">
        {day.tasks.map((task, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2" />
            {task}
          </li>
        ))}
      </ul>
    </div>
  </div>
)

// ── MAIN UI ─────────────────────────────
const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical")

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0d1117] via-[#111827] to-[#020617] text-white p-6">
      
      <div className="max-w-7xl mx-auto flex gap-6">

        {/* LEFT NAV */}
        <nav className="w-55 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
          
          <div>
            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">
              Sections
            </p>

            <div className="space-y-1">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all
                  ${
                    activeNav === item.id
                      ? "bg-linear-to-r from-pink-500/0 to-purple-500/20 text-white"
                      : "text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-4 bg-linear-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg text-sm hover:opacity-90 transition">
            Download Resume
          </button>
        </nav>

        {/* CENTER */}
        <main className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-y-auto max-h-[90vh]">
          
          <h2 className="text-xl font-semibold mb-6">
            {activeNav === "technical" && "Technical Questions"}
            {activeNav === "behavioral" && "Behavioral Questions"}
            {activeNav === "roadmap" && "Preparation Roadmap"}
          </h2>

          <div className="space-y-3">
            {activeNav === "technical" &&
              dummyReport.technicalQuestions.map((q, i) => (
                <QuestionCard key={i} item={q} index={i} />
              ))}

            {activeNav === "behavioral" &&
              dummyReport.behavioralQuestions.map((q, i) => (
                <QuestionCard key={i} item={q} index={i} />
              ))}

            {activeNav === "roadmap" &&
              dummyReport.preparationPlan.map(day => (
                <RoadMapDay key={day.day} day={day} />
              ))}
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="w-65 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-6">
          
          {/* SCORE */}
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">Match Score</p>

            <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center 
            bg-linear-to-br from-pink-500 to-purple-500 shadow-lg shadow-pink-500/30">
              <span className="text-3xl font-bold">{dummyReport.matchScore}%</span>
            </div>

            <p className="text-xs text-green-400 mt-3">
              Strong match
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <p className="text-xs text-gray-400 mb-3">Skill Gaps</p>

            <div className="flex flex-wrap gap-2">
              {dummyReport.skillGaps.map((gap, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                >
                  {gap.skill}
                </span>
              ))}
            </div>
          </div>

        </aside>

      </div>
    </div>
  )
}

export default Interview