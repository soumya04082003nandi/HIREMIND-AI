import { RouterProvider } from "react-router-dom"
import { router } from "./app.route.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"
// import ParticalBg from "./features/auth/components/ParticalBg.jsx"

const App = () => {
  return (   
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App

