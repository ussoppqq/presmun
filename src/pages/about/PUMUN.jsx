import React, { useRef, useEffect, useState } from 'react';
import { FaCalendarAlt, FaUniversity, FaUsers, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function PUMUN() {
  const milestones = [
    {
      icon: <FaCalendarAlt />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUniversity />,
      title: "TEST",
      description: "This is a description. Testing the description."
    },
    {
      icon: <FaUsers />,
      title: "TEST",
      description: "This is a description. Testing the description."
    }
  ];

  const description = `President University Model United Nations (PUMUN) Club is a student-based organization that operates under the direction of President University’s International Relations Department, which was founded on June 24th, 2011. After the organization became legal, PUMUN Club held its first official event, the Short Diplomatic Course, and it was recognized among clubs at another university. PUMUN Club began to be seen as the exclusive club that fully supported the interests of International Relations students by stimulating various events around MUN due to its great focus on global agendas. It gives proof that the involvement and active participation of its members over the years has given the best on behalf of President University, attracting more partners from various universities while also attracting more internal members from diverse majors. PUMUN Club has seen significant advances in terms of work programs and events in each division as a result of its growth. PUMUN Club has submitted this proposal as a work program from the Internal Agency Division to foster a sense of belonging among the members`;

  const paragraphs = description.split('. ').reduce((acc, sentence, index) => {
    const paragraphIndex = Math.floor(index / 3); 
    acc[paragraphIndex] = acc[paragraphIndex] ? acc[paragraphIndex] + '. ' + sentence : sentence;
    return acc;
  }, []).filter(p => p).map(p => p + '.');

  const [textBesideLogo, setTextBesideLogo] = useState(paragraphs[0] || '');
  const [textBelowLogo, setTextBelowLogo] = useState(paragraphs.slice(1).join(' ') || '');
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const splitTextBasedOnHeight = () => {
      if (isLogoLoaded && logoRef.current && textRef.current) {
        requestAnimationFrame(() => {
          const logoHeight = logoRef.current.offsetHeight;
          const textElement = textRef.current;

          textElement.style.maxHeight = `${logoHeight - 10}px`; 
          textElement.style.overflow = 'hidden';

          let besideText = paragraphs[0] || '';
          let belowText = paragraphs.slice(1).join('. ') || '';

          textElement.textContent = besideText;
          if (textElement.scrollHeight > logoHeight && paragraphs.length > 1) {
            besideText = paragraphs[0];
            belowText = paragraphs.slice(1).join('. ');
          }

          setTextBesideLogo(besideText.trim());
          setTextBelowLogo(belowText.trim());
        });
      }
    };

    splitTextBasedOnHeight();
    window.addEventListener('resize', splitTextBasedOnHeight);
    return () => window.removeEventListener('resize', splitTextBasedOnHeight);
  }, [isLogoLoaded, paragraphs]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 md:mb-20 relative"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
              <span className="text-[#f3c623]">About</span>
              <br className="sm:hidden" />
              <span className="text-white ml-2 sm:ml-4">PUMUN</span>
            </h1>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row items-start">
                <div className="flex justify-start mb-4 md:mb-0 md:mr-6">
                  <img 
                    ref={logoRef}
                    src="./Logo PUMUN.png" 
                    alt="PUMUN Logo" 
                    className="w-64 sm:w-72 md:w-80 h-auto object-contain"
                    onLoad={() => setIsLogoLoaded(true)}
                  />
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                    <p 
                      ref={textRef}
                      className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat text-justify"
                    >
                      {textBesideLogo}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 font-montserrat text-justify">
                    {textBelowLogo}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-32 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaChevronRight className="text-4xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}