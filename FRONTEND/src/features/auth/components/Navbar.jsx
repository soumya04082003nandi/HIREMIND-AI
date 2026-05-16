import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";

const Navbar = () => {
  const { user, handleLogout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return <Loading />;
  }

  return (
    <nav className="backdrop-blur-lg bg-[#0d1117]/90 border-b border-white/10 w-full sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        
        {/* Logo */}
        <h1 className="text-lg font-bold text-white">
          HireMind-
          <span className="text-pink-500">AI</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 items-center">
          <Link
            to="/"
            className="hover:text-pink-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/home"
            className="hover:text-pink-500 transition duration-300"
          >
            Generate Report
          </Link>

          {!user && (
            <Link
              to="/login"
              className="hover:text-pink-500 transition duration-300 "
            >
              Login/Register
            </Link>
          )}

          {user && (
            <HashLink
              smooth
              to="/home#my-reports"
              className="hover:text-pink-500 transition duration-300"
            >
              My Reports
            </HashLink>
          )}

          {user && (
            <Link
              onClick={handleLogout}
              to="/logout"
              className="hover:text-pink-500 transition duration-300"
            >
              Logout
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6 text-gray-300 bg-[#0d1117] border-t border-white/10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-pink-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-pink-500 transition duration-300"
          >
            Generate Report
          </Link>

          {!user && (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500 transition duration-300"
            >
              Login/Register
            </Link>
          )}

          {user && (
            <HashLink
              smooth
              to="/home#my-reports"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500 transition duration-300"
            >
              My Reports
            </HashLink>
          )}

          {user && (
            <Link
              to="/logout"
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="hover:text-pink-500 transition duration-300"
            >
              Logout
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;