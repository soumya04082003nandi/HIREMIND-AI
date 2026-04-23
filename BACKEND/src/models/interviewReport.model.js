const mongoose = require("mongoose")

/**
 * -job description : String
 * -resume text : String
 * -self description : String
 * 
 * - matchScore : Number
 * 
 * Technical questions : [{
 *            questions : "",
 *             intention: "",
 *              answer: ""      }]
 * 
 * 
 * Behavioral questions : [{
 *            questions : "",
 *             intention: "",
 *              answer: ""      }]
 * 
 * - Skill gaps : [{
 *                  skill: "",
 *                  severty : {
 *                    type : String  ,
 *                      enum : ["low", "medium" , "high"] }
 *               }] 
 * 
 * - pepration plan :[{
 *                day:Number,
 *                  focous : String,
 *                     tasks : [String]
 *                      }]
 */

const technicalQuestionsSchema = new mongoose.Schema({
    questions: {
        type: String,
        required: [true, "questions are required"]
    },
    intention: {
        type: String,
        required: [true, "Intention are required"]
    },
    answer: {
        type: String,
        required: [true, "Answer are required"]
    },
}, {
    _id: false
})


const behavioralQuestionsSchema = new mongoose.Schema({
    questions: {
        type: String,
        required: [true, "questions are required"]
    },
    intention: {
        type: String,
        required: [true, "Intention are required"]
    },
    answer: {
        type: String,
        required: [true, "Answer are required"]
    },
}, {
    _id: false
})


const skillGapsSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required"]
    }
}, {
    _id: false
})


const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "day number is required"]
    },
    focus: {
        type: String,
        required: [true, "focus is required"]
    },
    tasks: {
        type: [String],
        required: true
    }
}, {
    _id: false
})



const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required"],

    },
    resume: {
        type: String
    },
    selfDescription: {
        type: String
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
        default: 0,
    },
    technicalQuestions: [technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillGaps: [skillGapsSchema],
    preparationPlan: [preparationPlanSchema]
}, {
    timestamps: true
})


const interviewReportModel = mongoose.model("interviewReports", interviewReportSchema);

module.exports = interviewReportModel;