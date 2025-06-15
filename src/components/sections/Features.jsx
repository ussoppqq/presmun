import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAsia, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaGlobeAsia />,
      title: "Global Network",
      description: "Connect with delegates from across the world"
    },
    {
      icon: <FaHandshake />,
      title: "Diplomacy",
      description: "Learn the art of international relations"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Develop creative solutions to global challenges"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Join a network of future leaders"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-[#f3c623] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-horizon text-xl mb-2">{feature.title}</h3>
            <p className="text-white/70 font-montserrat">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 