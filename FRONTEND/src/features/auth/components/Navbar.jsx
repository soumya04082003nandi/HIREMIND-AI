import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../asset/logo.png"
import { useAuth } from '../hooks/useAuth'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const { user } = useAuth()


  return (
    <nav className="backdrop-blur-lg  bg-[#0d1117] border-b border-white/10 flex justify-between items-center py-4 px-10 w-full z-50">
      <h1 className="text-md font-bold ">HireMind-<span className='text-pink-500'>AI</span> </h1>

      <div className="hidden md:flex gap-8 text-gray-300">
        <Link to={"/"} className='cursor-pointer hover:text-pink-500 transition duration-300' >Home</Link>
        <Link to="/home" className='cursor-pointer hover:text-pink-500 transition duration-300' >Generate Report</Link>
        {!user && <Link to="/login" className='cursor-pointer hover:text-pink-500 transition duration-300'>Login/Register</Link>}
        {user && <Link to={"/logout"} className='cursor-pointer hover:text-pink-500 transition duration-300'>Logout</Link>}
        {user && (
          <HashLink
            to={"/home#my-reports"}
            smooth
            className='cursor-pointer hover:text-pink-500 transition duration-300'
          >
            My Reports
          </HashLink>
        )}

      </div>


    </nav>

  )
}

export default Navbar
