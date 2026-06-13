import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Loading from '../components/Loading';

const Register = () => {

  const { loading, handleRegister } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await handleRegister({ username, email, password })
    if (user) navigate("/home")

  }

  if (loading) {
    return <Loading />

  }
  return (

    <main className=" relative min-h-[calc(100vh+72px)] flex items-center justify-center overflow-hidden  bg-linear-to-br from-[#0d1117] via-[#111827] to-[#020617]">

      <div className="absolute -top-25 -left-25 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-30 -right-25 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="
      relative
      w-full
      max-w-md
      min-w-xs
      p-8
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
     
      hover:shadow-[0_15px_45px_rgba(236,72,153,0.35)]
      transition-all
      duration-500
    ">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5">

          {/* username */}
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-gray-200">
              Username
            </label>
            <input
              onChange={(e) => { setUsername(e.target.value) }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
              className="px-4
            py-3
            rounded-xl
            bg-white/10
            border border-white/20
            text-white
            placeholder-gray-300
            backdrop-blur-md
            focus:outline-none
            focus:ring-2
            focus:ring-pink-500
            focus:border-pink-500
            transition-all
            duration-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-200">
              Email
            </label>
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              className="px-4
            py-3
            rounded-xl
            bg-white/10
            border border-white/20
            text-white
            placeholder-gray-300
            backdrop-blur-md
            focus:outline-none
            focus:ring-2
            focus:ring-pink-500
            focus:border-pink-500
            transition-all
            duration-300"
            />
          </div>


          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm text-gray-200">
              Password
            </label>
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              className="px-4
            py-3
            rounded-xl
            bg-white/10
            border border-white/20
            text-white
            placeholder-gray-300
            backdrop-blur-md
            focus:outline-none
            focus:ring-2
            focus:ring-pink-500
            focus:border-pink-500
            transition-all
            duration-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className=" w-full py-3 rounded-xl bg-linear-to-r from-pink-500 to-pink-600 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/30 active:scale-95 transition-all duration-300"
          >
            Register
          </button>

        </form>
        <h1 className='text-gray-300 text-sm text-center font-medium mt-5'>Already have an account? <Link className='ml-2 text-pink-600 hover:text-pink-500 transition' to="/login">Login</Link> </h1>
      </div>

    </main >
  )
}

export default Register
