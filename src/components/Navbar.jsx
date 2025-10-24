import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // This function adds specific styles for the active NavLink
  const linkStyle =
    "text-gray-600 hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkStyle =
    "text-white bg-green-700 px-3 py-2 rounded-md text-sm font-medium";
  const mobileLinkStyle =
    "block text-gray-700 hover:bg-green-100 hover:text-green-800 px-3 py-2 rounded-md text-base font-medium transition-colors";
  const activeMobileLinkStyle =
    "block text-white bg-green-700 px-3 py-2 rounded-md text-base font-medium";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="organisation Logo"
            className="h-25 py-2 w-auto"
          />{" "}
          {/* REPLACE with your logo */}
        </div>
        {/* Desktop Menu Links */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
            >
              Contact
            </NavLink>
            <NavLink 
                to="/support-us" // Add link for Support Us
                className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
              >
                Support Us
              </NavLink>
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMobileMenu} // Add onClick handler
            type="button"
            className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen} // Dynamically set aria-expanded
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon Conditional Rendering */}
            {isMobileMenuOpen ? (
              // X icon (Close menu)
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon (Open menu)
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        
      </div>
      {/* Mobile Menu Links - Conditional Rendering */}
        {/* Use Tailwind classes to show/hide based on state. 
         'md:hidden' ensures it's ONLY for mobile.
         Transition classes added for smooth opening/closing.
      */}
        <div
          className={`
           md:hidden 
           transition-all duration-300 ease-in-out overflow-hidden
           ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
         `}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeMobileLinkStyle : mobileLinkStyle
              }
              onClick={closeMobileMenu} // Close menu on link click
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeMobileLinkStyle : mobileLinkStyle
              }
              onClick={closeMobileMenu} // Close menu on link click
            >
              About Us
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? activeMobileLinkStyle : mobileLinkStyle
              }
              onClick={closeMobileMenu} // Close menu on link click
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeMobileLinkStyle : mobileLinkStyle
              }
              onClick={closeMobileMenu} // Close menu on link click
            >
              Contact
            </NavLink>
            <NavLink 
            to="/support-us" // Add link for Support Us
            className={({ isActive }) => isActive ? activeMobileLinkStyle : mobileLinkStyle}
            onClick={closeMobileMenu} 
          >
            Support Us
          </NavLink>
          </div>
        </div>
    </nav>
  );
}
