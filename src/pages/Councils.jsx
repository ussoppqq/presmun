import React, { useState } from 'react';
import { FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Councils() {
  const [expandedCouncil, setExpandedCouncil] = useState(null);

  const councils = [
    {
      id: 1,
      img: "./UNEP WHITE.png",
      title: "United Nations Environment Programme (UNEP)",
      theme: "Rising Tides, Falling Diversity: Climate Change Action Against Sea Level Rise and Biodiversity Loss",
      difficulty: "Beginner - Single",
      description:
        "The United Nations Environment Programme (UNEP) is the leading global authority on environmental issues, dedicated to combating climate change, protecting biodiversity, and promoting sustainability. Established in 1972, UNEP works to address rising sea levels and biodiversity loss by advocating for emissions reduction, ecosystem conservation, and climate resilience. Through international cooperation and policy development, UNEP encourages global action, particularly from major emitters, to secure a sustainable and climate-resilient future.",
    },
    {
      id: 2,
      img: "./UNDP WHITE.png",
      title: "United Nations Development Programme (UNDP)",
      theme: "Reshaping Urban Development and Addressing Gentrification",
      difficulty: "Intermediate - Single",
      description:
        "The United Nations Development programme is a body within the UN agency which centers itself on international development of society through having dedications in eradicating poverty, promoting sustainable development and strengthening democratic governance. Over 170 countries worldwide are a part of this body, assisting and funding initiatives within the frame of Sustainable Development Goals (SDGs). UNDP focuses on addressing climate challenges, preventing crises, building resilience and creating an environment of social equity via international cooperations.",
    },
    {
      id: 3,
      img: "./IPC WHITE.png",
      title: "Press Corps",
      difficulty: "Beginner - Single",
      description:
        "The Press Council at President University Model United Nations 2025 plays an important role in spreading awareness about sustainability and climate action. Under the grand theme 'Answer the Nature's Call: Advancing Sustainability for a Climate-Secure Future,' this council highlights the urgency of protecting the environment and ensuring a better future for all. On the Conference day, Press holds a responsibility to share important discussions, to inform the public, and encourage action through journalism. During the conference, the Press Team will cover debates, interview delegates, fact-check statements, and create media content like articles, newsletters, and social media updates. By being part of this council, delegates will learn how journalism influences global conversations and helps shape real-world decisions on sustainability.",
    },
  ];

  const toggleCouncil = (id) => {
    setExpandedCouncil(expandedCouncil === id ? null : id);
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
              <span className="text-[#f3c623]">Our</span>{' '}
              <span className="text-white">Councils</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50 max-w-md mx-auto"></div>
          </motion.div>

          {/* Councils Grid - New Design */}
          <div className="grid grid-cols-1 gap-8">
            {councils.map((council) => (
              <motion.div 
                key={council.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Council Card */}
                <div 
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${expandedCouncil === council.id ? 'bg-[#00072d]' : 'bg-[#00072d]/70 hover:bg-[#00072d]'}`}
                  onClick={() => toggleCouncil(council.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#f3c623]/10 to-transparent opacity-0 ${expandedCouncil === council.id ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      {/* Logo */}
                      <div className="w-full md:w-1/4 flex justify-center">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="absolute inset-0 rounded-lg border-2 border-[#f3c623]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img 
                            src={council.img} 
                            alt={council.title} 
                            className="h-32 object-contain"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <h2 className="font-horizon text-xl md:text-2xl text-[#f3c623]">
                            {council.title}
                          </h2>
                          <button className="text-[#f3c623] p-1">
                            {expandedCouncil === council.id ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        
                        {council.theme && (
                          <p className="mt-2 text-sm md:text-base text-white/80 italic">
                            "{council.theme}"
                          </p>
                        )}
                        
                        {council.difficulty && (
                          <div className="mt-3 inline-block bg-[#f3c623]/10 px-3 py-1 rounded-full text-sm">
                            <span className="text-[#f3c623]">{council.difficulty}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedCouncil === council.id && (
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
                              <p className="text-white/80 leading-relaxed text-justify">
                                {council.description}
                              </p>
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
            <FaUsers className="text-2xl sm:text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}