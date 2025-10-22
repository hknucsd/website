import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import whiteHknLogo from '../media/logos/hkn-logo-white.png';
import blackHknLogo from '../media/logos/hkn-logo-black.svg';

function NavBar() {
  const location = useLocation();
  const isCareerFairPage = location.pathname === '/career-fair';
  const logoSrc = isCareerFairPage ? whiteHknLogo : blackHknLogo;
  const textColorClass = isCareerFairPage ? 'text-white' : 'text-black';
  const hoverColorClass = isCareerFairPage ? 'hover:text-[#A3D7E5]' : 'hover:text-[#5F69A6]';
  
  return (
    <nav className={`bg-transparent ${isCareerFairPage ? '' : 'shadow-md bg-white bg-opacity-90'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logoSrc} alt="HKN Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? '[color:#5F69A6]' : textColorClass
              } ${hoverColorClass}`}
            >
              About
            </Link>
            <Link
              to="/career-fair"
              className={`${
                location.pathname === '/career-fair' ? '[color:#A3D7E5]' : textColorClass
              } ${hoverColorClass}`}
            >
              Honors Career Fair
            </Link>
            <Link
              to="/sponsor"
              className={`${
                location.pathname === '/sponsor' ? '[color:#5F69A6]' : textColorClass
              } ${hoverColorClass}`}
            >
              Sponsor
            </Link>
            <a href="#contact" className={`${textColorClass} ${hoverColorClass}`}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;