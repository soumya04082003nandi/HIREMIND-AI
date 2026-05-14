import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Interview from "./features/interview/pages/Interview";
import Protected from "./features/auth/components/Protected";
import Home from "./features/interview/pages/Home";
import Navbar from "./features/auth/components/Navbar";
import LandingPage from "./features/auth/pages/LandingPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
export const router = createBrowserRouter([
  {
    element: <Layout />,   // <-- comma required here
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/home",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/interview",
        element: (
          <Protected>
            <Interview />
          </Protected>
        ),
      },

      {
        path: "/interview/report/:interviewId",
        element: (
          <Protected>
            <Interview />
          </Protected>
        ),
      },
    ],
  },
]);