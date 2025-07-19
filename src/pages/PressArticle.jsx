import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function PressArticles() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "PresMUN 2025: Young Voices Shape Tomorrow",
      author: "Sarah Mitchell",
      date: "March 20, 2025",
      readTime: "4 min read",
      excerpt: "A focused gathering of 25 delegates from 15 countries delivered impactful solutions on climate action and digital diplomacy.",
      content: `The intimate setting of PresMUN 2025 proved that meaningful diplomacy doesn't require massive crowds. With just 25 carefully selected delegates representing 15 nations, the conference fostered deeper conversations and more actionable outcomes than many larger events.

The highlight came during the Climate Solutions Committee, where delegates from Denmark, Costa Rica, and Kenya collaborated to draft a youth-led carbon offset program. Their proposal, refined over two intensive sessions, garnered unanimous support and real-world implementation potential.

"Small groups allow for genuine connection," noted delegate Maria Santos from Portugal. "We weren't just debating positions—we were building actual friendships across continents."

The Digital Diplomacy Workshop introduced innovative approaches to international communication, with delegates creating a shared platform for ongoing collaboration beyond the conference.

Awards recognized exceptional contribution rather than competition, with three delegates sharing the Outstanding Diplomat honor for their collaborative spirit and innovative thinking.

As PresMUN 2025 concluded, participants committed to quarterly virtual meetings, transforming a weekend conference into an ongoing diplomatic network.`
    },
    {
      id: 2,
      title: "Innovation in Youth Diplomacy: PresMUN's Digital Revolution",
      author: "James Rodriguez",
      date: "March 22, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `PresMUN 2025 broke new ground by seamlessly integrating digital tools with traditional diplomatic simulation, creating an experience that mirrors modern international relations.

The conference introduced live translation capabilities, allowing delegates to communicate in their native languages while maintaining the flow of debate. This innovation particularly benefited the delegates from Brazil and Japan, who delivered their most passionate speeches in Portuguese and Japanese respectively.

Virtual Reality sessions transported delegates to simulated crisis zones, providing unprecedented context for humanitarian discussions. The VR experience of visiting refugee camps brought tears to several participants and fundamentally changed the tone of policy debates.

"Technology didn't replace human connection—it enhanced it," observed conference director Dr. Elena Vasquez. The hybrid format allowed remote participation from delegates in Australia and New Zealand, expanding the conference's global reach without losing intimacy.

The most innovative feature was the real-time sentiment analysis of speeches, helping chairs identify when tensions were rising and when to call for cooling-off periods.

This digital transformation sets a new standard for educational diplomacy, proving that tradition and innovation can coexist effectively.`
    }
  ];

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative py-[5rem] sm:py-16 md:py-[10rem] px-4 sm:px-6 md:px-8">
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
            <div className="h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50 max-w-md mx-auto"></div>
          </motion.div>

          {/* Articles Grid - Similar to Council Design */}
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Article Card */}
                <div
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${expandedArticle === article.id ? 'bg-[#00072d]' : 'bg-[#00072d]/70 hover:bg-[#00072d]'}`}
                  onClick={() => toggleArticle(article.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#f3c623]/10 to-transparent opacity-0 ${expandedArticle === article.id ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex flex-col gap-4">
                      {/* Title and Toggle */}
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="font-horizon text-xl md:text-2xl text-[#f3c623]">
                          {article.title}
                        </h2>
                        <button className="text-[#f3c623] p-1">
                          {expandedArticle === article.id ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-white/60 font-montserrat text-sm">
                        <span className="flex items-center gap-2">
                          <FaUser /> {article.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt /> {article.date}
                        </span>
                        <div className="inline-block bg-[#f3c623]/10 px-3 py-1 rounded-full">
                          <span className="text-[#f3c623]">{article.readTime}</span>
                        </div>
                      </div>

                      {/* Excerpt */}
                      <p className="text-white/80 font-montserrat text-base leading-relaxed italic">
                        "{article.excerpt}"
                      </p>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedArticle === article.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <div className="pt-6 border-t border-[#f3c623]/20">
                            <div className="relative pl-6">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                              <div className="prose prose-invert max-w-none">
                                {article.content.split('\n\n').map((paragraph, pIndex) => (
                                  <motion.p
                                    key={pIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                                    className="text-white/80 leading-relaxed text-justify mb-4 font-montserrat"
                                  >
                                    {paragraph}
                                  </motion.p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#f3c623] opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#f3c623] opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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