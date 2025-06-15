import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaLine, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      icon: <FaLine className="text-3xl" />,
      platform: "Line",
      value: "@ghu3650+",
      link: "https://line.me/ti/p/@ghu3650+",
      color: "from-green-400 to-green-500",
      hoverColor: "group-hover:text-green-400"
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      platform: "Instagram",
      value: "@presidentmodelun",
      link: "https://instagram.com/presidentmodelun",
      color: "from-pink-500 to-purple-500",
      hoverColor: "group-hover:text-pink-400"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      platform: "Email",
      value: "secretariatpresmun.official@gmail.com",
      link: "mailto:secretariatpresmun.official@gmail.com",
      color: "from-[#f3c623] to-[#eb8317]",
      hoverColor: "group-hover:text-[#f3c623]"
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      platform: "LinkedIn",
      value: "PRESMUN",
      link: "https://linkedin.com/company/presmun",
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:text-blue-400"
    }
  ];

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
          backgroundSize: '50px 50px',
          opacity: 0.3 
        }}></div>
      </div>

      <div className="relative py-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-24 relative"
          >
            <h1 className="font-horizon text-5xl md:text-6xl text-center">
              <span className="text-[#f3c623]">Get in</span>
              <br />
              <span className="text-white">Touch</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          {/* Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-32"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed pl-8 font-montserrat text-center">
                Have questions about PresMUN? We're here to help! Connect with us through any of our platforms.
              </p>
            </div>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto mb-32">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Background Elements */}
                <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623]/20"></div>
                <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623]/20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                <div className="absolute -inset-3 sm:-inset-4 border-l-2 border-t-2 border-[#f3c623]/10"></div>
                <div className="absolute -inset-3 sm:-inset-4 border-r-2 border-b-2 border-[#f3c623]/10 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"></div>
                <div className="absolute -inset-4 sm:-inset-5 border-l-2 border-t-2 border-[#f3c623]/5"></div>
                <div className="absolute -inset-4 sm:-inset-5 border-r-2 border-b-2 border-[#f3c623]/5 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
                
                <div className="relative p-6 sm:p-8 bg-black/20 group-hover:bg-black/30 transition-all duration-500">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="flex items-center gap-6">
                    <div className={`text-white/80 transition-colors duration-300 ${contact.hoverColor}`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-horizon text-xl sm:text-2xl mb-2">{contact.platform}</h3>
                      <p className="text-white/70 font-montserrat text-sm sm:text-base">{contact.value}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location Section */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-8 border-l-4 border-t-4 border-[#f3c623] opacity-20"></div>
            <div className="absolute -inset-8 border-r-4 border-b-4 border-[#f3c623] opacity-20 translate-x-4 translate-y-4"></div>
            
            <div className="relative p-12 bg-black/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-4xl text-[#f3c623]" />
                    <h2 className="font-horizon text-4xl">Our Location</h2>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                    <p className="text-white/80 font-montserrat text-lg pl-8 leading-relaxed">
                      President University, Jababeka Education Park<br />
                      Jl. Ki Hajar Dewantara, Mekarmukti<br />
                      Cikarang Utara, Bekasi, Jawa Barat 17530
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-2 border-2 border-[#f3c623] opacity-50"></div>
                  {/* Replace with actual map or image */}
                  <div className="relative w-full h-[300px] bg-black/50 flex items-center justify-center">
                    <span className="text-white/50">Map placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-32 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaChevronRight className="text-3xl sm:text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}