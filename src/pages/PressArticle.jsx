import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaArrowRight, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import articles from './articles';

export default function EnhancedPressArticles() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      {/* Background */}
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(243, 198, 35, 0.1) 0%, transparent 70%)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative pt-32 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="font-horizon text-4xl md:text-6xl mb-4">
              <span className="text-[#f3c623]">Press</span>{' '}
              <span className="text-white">Articles</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50 max-w-md mx-auto"></div>
          </div>

          {/* Articles Grid - Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openArticle(article)}
              >
                <div className="bg-[#00072d]/80 rounded-2xl p-6 h-full border border-[#f3c623]/20 hover:border-[#f3c623]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#f3c623]/10">
                  {/* Article Header */}
                  <div className="mb-4">
                    <h3 className="font-horizon text-lg text-[#f3c623] mb-3 line-clamp-2 leading-tight">
                      {article.title}
                    </h3>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser /> {article.author}
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f3c623]/10">
                    <span className="text-[#f3c623] text-sm font-medium group-hover:text-[#ffe066] transition-colors">
                      Read Full Article
                    </span>
                    <FaArrowRight className="text-[#f3c623] group-hover:transform group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaNewspaper className="text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Modal for Full Article */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="bg-[#000420] border border-[#f3c623]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#00072d] p-6 border-b border-[#f3c623]/20 flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="font-horizon text-2xl text-[#f3c623] mb-3 leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {selectedArticle.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUser /> {selectedArticle.author}
                    </span>
                    {selectedArticle.readTime && (
                      <span className="bg-[#f3c623]/20 px-3 py-1 rounded-full text-[#f3c623]">
                        {selectedArticle.readTime}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeArticle}
                  className="text-white/60 hover:text-[#f3c623] p-2 hover:bg-[#f3c623]/10 rounded-full transition-all duration-200 ml-4"
                >
                  <FaTimes size={20} />
                </button>
              </div>


                <div className="p-6 overflow-y-auto max-h-[60vh]">
                  <div className="prose prose-invert max-w-none">
                    {selectedArticle.content.split('\n\n').map((paragraph, pIndex) => {
                      const linkify = (text) => {
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        return text.split(urlRegex).map((part, i) => {
                          if (urlRegex.test(part)) {
                            return (
                              <a
                                key={i}
                                href={part}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#f3c623] underline hover:text-[#ffe066] inline-flex items-center gap-1 transition-colors break-all"
                              >
                                {part}
                                <FaExternalLinkAlt className="text-xs" />
                              </a>
                            );
                          }
                          return part;
                        });
                      };
                      
                      return (
                        <motion.p
                          key={pIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                          className="text-white/85 leading-relaxed mb-6 text-justify"
                        >
                          {linkify(paragraph)}
                        </motion.p>
                      );
                    })}
                  </div>
                </div>

              {/* Modal Footer */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}