import React from 'react';

export default function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-6 mb-16">
      {Icon && <Icon className="text-4xl text-[#f3c623]" />}
      <h2 className="font-horizon text-3xl md:text-4xl text-white">{title}</h2>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-[#f3c623] to-transparent"></div>
    </div>
  );
} 