import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaChevronDown, FaChevronUp, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function PressArticle() {
  const articles = [
    {
      title: "Global Diplomacy in Action: PresMUN 2025 Kicks Off",
      delegate: "Alice Johnson",
      date: "March 15, 2025",
      excerpt: "The opening ceremony set a vibrant tone for PresMUN 2025, uniting delegates worldwide.",
      description: "The opening ceremony of PresMUN 2025 was a spectacular event, bringing together delegates from diverse backgrounds to engage in global diplomacy. Keynote speeches and cultural performances highlighted the importance of unity and collaboration.",
      image: "./alden.jpg"
    },
    {
      title: "Climate Crisis Debates Heat Up at PresMUN",
      delegate: "Bob Smith",
      date: "March 16, 2025",
      excerpt: "Delegates tackled climate change with innovative solutions and passionate debates.",
      description: "Day two of PresMUN 2025 saw intense discussions in the Environmental Council, with delegates proposing bold strategies to combat climate change, including renewable energy initiatives and global carbon reduction frameworks.",
      image: "./alden.jpg"
    },
    {
      title: "PresMUN 2025: A Showcase of Young Diplomats",
      delegate: "Clara Nguyen",
      date: "March 17, 2025",
      excerpt: "The awards ceremony celebrated the outstanding contributions of young diplomats.",
      description: "The closing ceremony of PresMUN 2025 honored exceptional delegates with awards for diplomacy, position papers, and leadership. The event concluded with inspiring speeches and a call for continued global engagement.",
      image: "./alden.jpg"
    },
  ];

  const [expandedArticle, setExpandedArticle] = useState(null);

  const toggleArticle = (index) => {
    setExpandedArticle(expandedArticle === index ? null : index);
  };

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[#000420]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-[#f3c623]">Press</span>{' '}
              <span className="text-white">Articles</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50 max-w-md mx-auto mt-4"></div>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative bg-[#00072d]/70 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f3c623]/30 transition-all duration-300 rounded-xl pointer-events-none"></div>

                {/* Floating Elements */}
                <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#f3c623]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-[#f3c623]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Article Image */}
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000420]/80 to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="relative p-6 flex flex-col">
                  <h2 className="font-horizon text-lg sm:text-xl md:text-2xl text-[#f3c623] mb-3 group-hover:text-[#f3c623]/80 transition-colors">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-4 text-white/60 mb-4 font-montserrat text-sm">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUser /> {article.delegate}
                    </span>
                  </div>
                  <p className="text-white/70 font-montserrat text-sm mb-4">{article.excerpt}</p>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedArticle === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <div className="pt-4 border-t border-[#f3c623]/20">
                          <div className="relative pl-4">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                            <p className="text-white/80 leading-relaxed text-justify text-sm">
                              {article.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Buttons */}
                  <div className="mt-4 flex justify-between items-center">
                    <motion.button
                      className="font-horizon text-[#f3c623] hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read More
                      <FaChevronRight />
                    </motion.button>
                    <button
                      className="text-[#f3c623] p-1"
                      onClick={() => toggleArticle(index)}
                    >
                      {expandedArticle === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#f3c623] opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#f3c623] opacity-50"></div>
              </motion.div>
            ))}
          </div>

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