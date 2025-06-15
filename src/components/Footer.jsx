import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaLine } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaLine />,
      href: "https://line.me/ti/p/@ghu3650+",
      hoverColor: "hover:text-green-400"
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/presidentmodelun",
      hoverColor: "hover:text-pink-400"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:secretariatpresmun.official@gmail.com",
      hoverColor: "hover:text-[#f3c623]"
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/company/presmun",
      hoverColor: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="relative bg-[#000420] mt-auto">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Copyright */}
          <div className="relative space-y-2 md:order-1">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
            <div className="pl-8">
              <h3 className="font-horizon text-2xl text-white mb-2">PresMUN 2025</h3>
              <p className="text-white/60 font-montserrat">
                &copy; All Rights Reserved. President University Model United Nations
              </p>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex justify-center md:justify-end space-x-6 md:order-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white/60 transition-colors duration-300 ${link.hoverColor} text-xl`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
    </footer>
  );
}