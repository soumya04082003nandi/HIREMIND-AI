import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../asset/logo.png"
const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between w-full h-10 bg-pink-500 z-999">
      <div className="nav-left"><img src={logo}  alt="logo"className='w-12' /></div>
      <div className="nav-right">
    <Link to="/">home</Link>
    <Link></Link>

      </div>
    </nav>
  )
}

export default Navbar
