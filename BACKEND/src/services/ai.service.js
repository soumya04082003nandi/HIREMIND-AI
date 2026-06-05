const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const { z } = require('zod')
const { zodToJsonSchema } = require("zod-to-json-schema")
const puppeteer = require("puppeteer")

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

const generateResumePdf = async ({
  resume,
  selfDescription,
  jobDescription,
}) => {

  const prompt = `
You are an expert ATS resume writer and HTML resume designer.

Generate a highly optimized ATS-friendly single-page resume in HTML format.

IMPORTANT:
- Return ONLY raw HTML
- Do NOT return JSON
- Do NOT use markdown
- Do NOT wrap inside code fences
- Start directly with <!DOCTYPE html>

CANDIDATE RESUME:
${truncate(resume)}

SELF DESCRIPTION:
${truncate(selfDescription)}

JOB DESCRIPTION:
${truncate(jobDescription)}

RULES:
- ATS friendly
- Single column layout
- Single A4 page
- Tailored strongly to the job description
- Prioritize relevant keywords naturally
- Use concise achievement-oriented bullet points
- No fake information
- No icons
- No images
- No SVG
- No tables
- No CSS grid
- Use semantic HTML
- Include inline CSS
- Optimize for Puppeteer PDF generation
- Compact professional design
- Use print-friendly CSS
- Include @page A4 styling
`;

  try {

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],

      config: {
        temperature: 0.4,
        topP: 0.9,
      },
    });

    const rawHtml =
      response.text ||
      response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawHtml) {
      throw new Error("No HTML returned from AI");
    }

    // Clean markdown fences if model accidentally adds them
    const cleanedHtml = rawHtml
      .replace(/```html/g, "")
      .replace(/```/g, "")
      .trim();

    if (
      !cleanedHtml.includes("<html") &&
      !cleanedHtml.includes("<!DOCTYPE html")
    ) {
      console.log(cleanedHtml);
      throw new Error("Invalid HTML returned from AI");
    }

    const pdfBuffer = await generatePdfFromHtml(cleanedHtml);

    return pdfBuffer;

  } catch (error) {

    console.error("Resume generation failed:", error);

    throw new Error(
      error?.message || "Failed to generate resume PDF"
    );
  }
};



// const generatePdfFromHtml = async (htmlContent) => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
//   const pdfBuffer = await page.pdf({ format: 'A4' });
//   await browser.close();
//   return pdfBuffer;
// }

const generatePdfFromHtml = async (htmlContent) => {
  try {
    console.log("Launching browser...");

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    });

    console.log("Browser launched");

    const page = await browser.newPage();

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return pdfBuffer;
  } catch (error) {
    console.error("PDF generation error:", error);
    throw error;
  }
};

module.exports = { generateInterviewReport, generateResumePdf };