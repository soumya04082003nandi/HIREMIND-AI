# 🚀 HireMind AI

**HireMind AI** is an AI-powered career assistant that helps job seekers create ATS-friendly resumes, analyze resumes against job descriptions, and prepare for interviews using Generative AI.

Built with the MERN stack and Google's Gemini AI, HireMind AI streamlines the job application process by providing intelligent, personalized career assistance.

---

## ✨ Features

### 🔐 User Authentication

* Secure user registration and login
* JWT Authentication
* HTTP-only Cookie-based sessions

### 📄 ATS Resume Generator

* Generate resumes tailored to a specific Job Description (JD)
* AI-optimized content for better ATS compatibility
* Download generated resumes as PDF

### 📊 AI Resume Analysis

* Compare resumes with job descriptions
* ATS compatibility score
* Missing keywords detection
* Strengths and weaknesses analysis
* Personalized improvement suggestions

### 🎤 AI Interview Preparation

* Generate technical and HR interview questions
* AI-powered interview report
* Difficulty-based questions
* Role-specific interview preparation

### 📁 Report Management

* Save generated reports
* View previous analyses
* Download generated resumes

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Zod

### Database

* MongoDB Atlas
* Mongoose

### AI & External Services

* Google Gemini API
* Puppeteer (PDF Generation)
* Cloudinary

---

## 📂 Project Structure

```
HireMind-AI
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/HireMind-AI.git
cd HireMind-AI
```

### 2. Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Run Locally

Start Backend

```bash
cd server
npm run dev
```

Start Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots

> Add screenshots of:
>
> * Landing Page
> * Dashboard
> * Resume Analyzer
> * ATS Resume Generator
> * Interview Report
> * Authentication Pages

---

## 🚀 Future Roadmap

* Chrome Extension for Job Autofill
* AI Cover Letter Generator
* AI Career Coach
* Job Tracker
* Application Analytics
* Recruiter Dashboard
* Mock Interview with Voice AI
* Email Notifications

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Soumya Nandi**

* Full Stack Developer
* Passionate about AI-powered web applications
* Open to collaboration and contributions

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
