import React, { useState } from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import SideMenu from './components/SideMenu';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ Mobile Hamburger Button */}
      <div className="md:hidden fixed z-50 top-4 right-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 bg-white shadow"
          aria-label="Toggle menu"
        >
          {/* Replace inner button with icon/text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* ✅ Sidebar Menu */}
      <div
        className={`
          bg-white shadow-2xl w-64 h-full
          fixed top-0 left-0 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:shadow-none md:h-auto
          z-40
        `}
      >
        <div className="pt-6 text-center border-b border-gray-200">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <span className="text-primary font-nunito text-2xl font-extrabold">
              Dash
            </span>
            <span className="text-seco font-nunito text-2xl font-extrabold">
              Stack
            </span>
          </Link>
        </div>

        {/* ✅ Pass onLinkClick to hide sidebar on mobile */}
        <SideMenu onLinkClick={() => setIsOpen(false)} />
      </div>

      {/* ✅ Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default SideBar;
