import { RouterProvider } from "react-router-dom"
import { router } from "./app.route.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
import ParticlelBg from "./features/auth/components/ParticleBg.jsx"
import Navbar from "./features/auth/components/Navbar.jsx"

const App = () => {
  return (   
    <AuthProvider>
     
      <InterviewProvider>
        <ParticlelBg/>
        <Navbar/>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App

