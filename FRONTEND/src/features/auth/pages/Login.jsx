import React, { useState } from 'react';
import {  Link ,useNavigate} from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/Loading';

const Login = () => {
  const {loading, handleLogin,} = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault(); 
      const user =await handleLogin({email,password})
    if(user)navigate("/")      
        
  }

  if(loading){
    return <Loading/>
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900">

      <div className="w-full max-w-md min-w-xs bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login
        </h1>

        <form
        onSubmit={handleSubmit}
        className="space-y-5">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
              onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-black  focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-600">
              Password
            </label>
            <input
              onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none text-black focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:scale-95  transition duration-200"
          >
            Login
          </button>

        </form>
        <h1 className='text-gray-600 text-sm font-semibold mt-2'>Don't have an account? <Link className='ml-2 text-blue-600' to="/register">Register</Link> </h1>
      </div>

    </main>
  );
};

export default Login;