import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Handle body scroll when menu is open/closed
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [window.location.pathname]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-[#000420]/80 backdrop-blur-md'
          : 'bg-[#000420]/5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-4" 
          >
            <img 
              src="./logo-white.png" 
              alt="PresMUN Logo" 
              className="h-12 transform transition-all duration-300 group-hover:scale-105" 
            />
            <span className="font-horizon text-[1rem] text-white group-hover:text-[#f3c623] transition-colors duration-300">
              PRESMUN 2025
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-montserrat">
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white group-hover:text-[#f3c623] transition-colors duration-300">
                <span>About Us</span>
                <IoChevronDown className="h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-[#000420]/60 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 overflow-hidden">
                  <Link
                    to="/about/presmun"
                    className="block px-6 py-3 text-white hover:bg-[#f3c623]/10 hover:text-[#f3c623] transition-colors duration-300"
                  >
                    PresMUN
                  </Link>
                  <Link
                    to="/about/pumun"
                    className="block px-6 py-3 text-white hover:bg-[#f3c623]/10 hover:text-[#f3c623] transition-colors duration-300"
                  >
                    PUMUN
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <Link
              to="/councils"
              className="text-white hover:text-[#f3c623] transition-colors duration-300"
            >
              Councils
            </Link>
            <Link
              to="/committees"
              className="text-white hover:text-[#f3c623] transition-colors duration-300"
            >
              Committees
            </Link>
            <Link
              to="/press-article"
              className="text-white hover:text-[#f3c623] transition-colors duration-300"
            >
              Press Article
            </Link>

            {/* Others Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white group-hover:text-[#f3c623] transition-colors duration-300">
                <span>Others</span>
                <IoChevronDown className="h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-64 bg-[#000420]/60 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 overflow-hidden">
                  <Link
                    to="/join-us"
                    className="block px-6 py-3 text-white hover:bg-[#f3c623]/10 hover:text-[#f3c623] transition-colors duration-300"
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-6 py-3 text-white hover:bg-[#f3c623]/10 hover:text-[#f3c623] transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center"
          >
            <span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu - Slide from right */}
        <div
          className={`md:hidden fixed top-0 right-0 w-[300px] h-screen bg-[#000420]/90 backdrop-blur-md transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '80px' }}
        >
          <div className="h-full overflow-y-auto font-montserrat">
            <div className="p-6 space-y-6">
              {/* About Us Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-medium text-[#f3c623]">About Us</span>
                  <IoChevronDown className="h-5 w-5 text-[#f3c623]" />
                </div>
                <div className="ml-4 space-y-3 border-l-2 border-[#f3c623]/20 pl-4">
                  <Link
                    to="/about/presmun"
                    className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    PresMUN
                  </Link>
                  <Link
                    to="/about/pumun"
                    className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    PUMUN
                  </Link>
                </div>
              </div>

              {/* Regular Links */}
              <div className="space-y-3">
                <Link
                  to="/councils"
                  className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Councils
                </Link>
                <Link
                  to="/committees"
                  className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Committees
                </Link>
                <Link
                  to="/press-article"
                  className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Press Article
                </Link>
              </div>

              {/* Others Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-medium text-[#f3c623]">Others</span>
                  <IoChevronDown className="h-5 w-5 text-[#f3c623]" />
                </div>
                <div className="ml-4 space-y-3 border-l-2 border-[#f3c623]/20 pl-4">
                  <Link
                    to={{ pathname: "https://bit.ly/PRESMUN2025EarlyBird" }}
                    className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Join Us
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-lg text-white/90 hover:text-[#f3c623] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}