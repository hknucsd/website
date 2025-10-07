import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import hknLogo from '../media/logos/HKN-logo.svg';

function NavBar() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={hknLogo} alt="HKN Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600`}
            >
              About
            </Link>
            <Link
              to="/career-fair"
              className={`${
                location.pathname === '/career-fair' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600`}
            >
              Honors Career Fair
            </Link>
            <Link
              to="/sponsor"
              className={`${
                location.pathname === '/sponsor' ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600`}
            >
              Sponsor
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;