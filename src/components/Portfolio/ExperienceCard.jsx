import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

function ExperienceCard({ company, position, duration, description, color, accentColor }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <h3 className="text-xl font-bold" style={{ color }}>
          {company}
        </h3>
        <div className="flex items-center text-gray-500">
          <Calendar size={16} className="mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
      <div 
        className="inline-block px-3 py-1 rounded-full text-sm mb-3"
        style={{ backgroundColor: color + '15', color }}
      >
        {position}
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default ExperienceCard;