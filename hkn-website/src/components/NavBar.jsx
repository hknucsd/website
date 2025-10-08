import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import hknLogo from '../media/logos/hkn-logo-white.png';

function NavBar() {
  const location = useLocation();
  
  return (
    <nav className="bg-transparent">
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
                location.pathname === '/' ? '[color:#5F69A6]' : 'text-white'
              } hover:text-white`}
            >
              About
            </Link>
            <Link
              to="/career-fair"
              className={`${
                location.pathname === '/career-fair' ? '[color:#A3D7E5]' : 'text-white'
              } hover:text-white`}
            >
              Honors Career Fair
            </Link>
            <Link
              to="/sponsor"
              className={`${
                location.pathname === '/sponsor' ? '[color:#5F69A6]' : 'text-white'
              } hover:text-white`}
            >
              Sponsor
            </Link>
            <a href="#contact" className="text-white hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;