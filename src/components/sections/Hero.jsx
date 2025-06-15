import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./background-presmun.jpg)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000420]/30 to-[#000420]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full py-20 sm:py-32"
      >
        <motion.h1 
          className="font-horizon text-3xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wider"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="block text-white"
          >
            PRESIDENT INTERNATIONAL
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block bg-gradient-to-r from-[#f3c623] to-[#eb8317] bg-clip-text text-transparent mt-2 sm:mt-4"
          >
            MODEL UNITED NATIONS
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block text-white mt-2 sm:mt-4"
          >
            2025
          </motion.span>
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-8 sm:bottom-16 left-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent"
      />
    </section>
  );
}