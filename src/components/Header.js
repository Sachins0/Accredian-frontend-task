import React, { useState } from 'react'
import logo from '../assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white w-full py-2 px-4 drop-shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="https://accredian.com/">
            <img
              src={logo}
              alt="Accredian Logo"
              className="h-6 sm:h-8 md:h-10"
              loading='lazy'
            />
          </a>
          <a
            href="#"
            className="hidden md:flex bg-blue-500 text-white px-4 py-2 rounded items-center"
          >
            Courses
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path
                d="M6 4.79082L9.96875 0.818945C10.2625 0.525195 10.7375 0.525195 11.0281 0.818945C11.3187 1.1127 11.3187 1.5877 11.0281 1.88145L6.53125 6.38145C6.24687 6.66582 5.79062 6.67207 5.49687 6.40332L0.96875 1.88457C0.821875 1.7377 0.75 1.54395 0.75 1.35332C0.75 1.1627 0.821875 0.968946 0.96875 0.82207C1.2625 0.528321 1.7375 0.528321 2.02812 0.82207L6 4.79082Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-700">
            Refer & Earn
          </a>
          <a href="#" className="text-gray-700">
            Resources
          </a>
          <a href="#" className="text-gray-700">
            About Us
          </a>
          <a
            href="https://accredian.com/"
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Login
          </a>
          <a
            href="https://accredian.com/"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Try for free
          </a>
        </div>
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            Explore
            <svg
              className="ml-1"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 py-2">
          <a href="#" className="block py-1 text-gray-700">
            Refer & Earn
          </a>
          <a href="#" className="block py-1 text-gray-700">
            Resources
          </a>
          <a href="#" className="block py-1 text-gray-700">
            About Us
          </a>
          <a
            href="https://accredian.com/"
            className="block py-1 text-gray-700"
          >
            Login
          </a>
          <a
            href="https://accredian.com/"
            className="block py-1 text-gray-700"
          >
            Try for free
          </a>
        </div>
      )}
    </header>
  )
}

export default Header