const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

// ✅ Initialize AI
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

// ✅ Helper: truncate large input
const truncate = (text, max = 2000) => {
    if (!text) return "";
    return text.length > max ? text.slice(0, max) : text;
};

// ✅ Main Function
async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `
You are an AI interview assistant.

Return ONLY valid JSON.

STRICT RULES:
- technicalQuestions MUST be an array of OBJECTS with question, intention, answer
- behavioralQuestions MUST be an array of OBJECTS with question, intention, answer
- skillGaps MUST be an array of OBJECTS with skill and severity
- preparationPlan MUST be an array of OBJECTS with day, focus, tasks
- Do NOT return strings instead of objects
- Do NOT include explanation or markdown

FORMAT:

{
  "matchScore": 85,
  "technicalQuestions": [
    {
      "question": "What is Node.js?",
      "intention": "Check backend basics",
      "answer": "Explain event-driven architecture"
    }
  ],
  "behavioralQuestions": [
    {
      "question": "Tell me about a challenge",
      "intention": "Evaluate problem solving",
      "answer": "Use STAR method"
    }
  ],
  "skillGaps": [
    {
      "skill": "System Design",
      "severity": "high"
    }
  ],
  "preparationPlan": [
    {
      "day": 1,
      "focus": "Node.js",
      "tasks": ["Learn event loop"]
    }
  ],
  "title": "Backend Developer"
}

Candidate Data:
Resume: ${truncate(resume)}
Self Description: ${truncate(selfDescription)}
Job Description: ${truncate(jobDescription)}
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
            },
        });

        // ✅ Extract text safely
        const rawText =
            response.text ||
            response.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!rawText) {
            console.log("No response from AI");
            return;
        }

        const parsed = JSON.parse(rawText);

        // ✅ Just log the output
        // console.log("Generated Interview Report:\n", parsed);

        return parsed;

    } catch (error) {
        console.error("Error generating report:", error.message);
    }
}

module.exports = generateInterviewReport;