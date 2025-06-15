import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { number: "12+", label: "Years Experience" },
    { number: "500+", label: "Delegates" },
    { number: "50+", label: "Countries" },
    { number: "20+", label: "Events" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          <h3 className="font-horizon text-4xl md:text-5xl text-[#f3c623] mb-2">{stat.number}</h3>
          <p className="font-montserrat text-white/70">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
} 