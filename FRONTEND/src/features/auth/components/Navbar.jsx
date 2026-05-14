import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../asset/logo.png"
const Navbar = () => {
  return (
<nav className="backdrop-blur-lg  bg-[#0d1117] border-b border-white/10 flex items-center py-4 px-10 w-full z-50">
        <h1 className="text-md font-bold ">HIREMIND-<span className='text-pink-500'>AI</span> </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <Link to="/login">Login</Link>
          <Link to="/home" >Home</Link>
          
        </div>

       
      </nav>

  )
}

export default Navbar
