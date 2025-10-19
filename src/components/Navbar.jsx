import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // This function adds specific styles for the active NavLink
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'px-3 py-2 rounded-md text-sm font-medium bg-green-700 text-white transition-colors duration-300'
      : 'px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors duration-300';
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="NGO Logo" className="h-10 w-auto" /> {/* REPLACE with your logo */}
          <span className="text-xl font-bold text-gray-800 hidden sm:block">NYPEI</span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
          <NavLink to="/projects" className={getNavLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
