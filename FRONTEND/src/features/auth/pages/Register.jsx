import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }
  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-900" >

      <div className="w-full max-w-md min-w-xs bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5">

          {/* username */}
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-sm text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-black  focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-gray-600">
              Email
            </label>
            <input
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
            Register
          </button>

        </form>
        <h1 className='text-gray-600 text-sm font-semibold mt-2'>Already have an account? <Link className='ml-2 text-blue-600' to="/login">Login</Link> </h1>
      </div>

    </main >
  )
}

export default Register
