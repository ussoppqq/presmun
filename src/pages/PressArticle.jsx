import React from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PressArticle() {
  const articles = [
    {
      title: "Opening Ceremony Marks the Beginning of PresMUN 2025",
      date: "March 15, 2025",
      author: "Press Team",
      excerpt: "The grand opening ceremony of PresMUN 2025 welcomed delegates from across the globe...",
      image: "./alden.jpg"
    },
    {
      title: "Delegates Engage in Dynamic Council Sessions",
      date: "March 16, 2025",
      author: "Press Team",
      excerpt: "Day two saw intense debates and collaborative problem-solving across all councils...",
      image: "./alden.jpg"
    },
    {
      title: "PresMUN 2025 Concludes with Awards Ceremony",
      date: "March 17, 2025",
      author: "Press Team",
      excerpt: "The closing ceremony celebrated outstanding delegates and their achievements...",
      image: "./alden.jpg"
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

      <div className="relative py-[5rem] sm:py-16 md:py-[10rem] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 md:mb-20 relative"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              <span className="text-[#f3c623]">Press</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">Articles</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          <div className="p-[10rem]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">  
              COMING SOON
            </h1>
            </motion.div>
          </div>

          {/* Articles Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 md:mb-20">
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-2 sm:-inset-3 border-l-2 border-t-2 border-[#f3c623] opacity-20"></div>
                <div className="absolute -inset-2 sm:-inset-3 border-r-2 border-b-2 border-[#f3c623] opacity-20 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2"></div>
                
                <div className="relative bg-black/20 h-full flex flex-col">
                  <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-[#f3c623]"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-[#f3c623]"></div>
                  
                  <div className="relative">
                    <div className="absolute -inset-1 border-2 border-[#f3c623] opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="relative w-full h-40 sm:h-48 object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h2 className="font-horizon text-lg sm:text-xl mb-3 group-hover:text-[#f3c623] transition-colors">
                      {article.title}
                    </h2>
                    <div className="flex items-center gap-4 text-white/60 mb-4 font-montserrat text-sm">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt /> {article.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaUser /> {article.author}
                      </span>
                    </div>
                    <div className="relative flex-1">
                      <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                      <p className="text-white/70 pl-4 font-montserrat text-sm mb-4">{article.excerpt}</p>
                    </div>
                    <button className="font-horizon text-[#f3c623] hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base mt-auto">
                      Read More
                      <FaChevronRight className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaNewspaper className="text-2xl sm:text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}