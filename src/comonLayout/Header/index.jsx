import React, { useState } from 'react';
import { IoMenuSharp, IoCloseSharp, IoSearchSharp } from 'react-icons/io5';
import HederLeft from './components/HeaderLayout/HederLeft'; // যদি নিজে হেডারলেফট লোগো রাখো তবে ব্যবহার করো
import HederRight from './components/HeaderLayout/HederRight';
import { Link } from 'react-router';

const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Team', href: '/team' },
  { name: 'Settings', href: '/settings' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = {
    name: 'Jakaria Ahmod',
    role: 'admin',
    photoURL: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  };

  return (
    <header className="right-0 bg-white shadow-md z-50 w-full">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-full mx-auto">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center">
            {/* Hamburger for mobile */}
            <button
              className="md:hidden mr-3 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <IoCloseSharp size={24} />
              ) : (
                <IoMenuSharp size={24} />
              )}
            </button>

            {/* Logo / Brand */}
            <a href="/" className="flex items-center space-x-1">
              <span className="text-primary font-nunito text-2xl font-extrabold">
                Dash
              </span>
              <span className="text-seco font-nunito text-2xl font-extrabold">
                Stack
              </span>
            </a>
          </div>

          {/* Middle: Nav Links (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: Search + User */}
          <div className="flex items-center space-x-4">
            {/* Search box */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <IoSearchSharp
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            {/* User Profile */}
            <HederRight user={user} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 font-medium hover:bg-gray-100 rounded-md px-3 py-2 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
