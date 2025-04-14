import React from 'react';
import { Calendar, Circle } from 'lucide-react';

function ModernExperienceCard({ company, position, duration, description, primaryColor, accentColor, isLast }) {
  return (
    <div className="relative">
      {!isLast && (
        <div 
          className="absolute top-10 bottom-0 left-5 w-0.5"
          style={{ backgroundColor: `${primaryColor}30` }}
        ></div>
      )}
      <div className="flex">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center z-10"
          style={{ 
            backgroundColor: primaryColor,
            boxShadow: `0 0 0 4px ${primaryColor}20`
          }}
        >
          <Circle size={16} fill="white" color="white" />
        </div>
        <div className="ml-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-50 p-6 flex-1 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
            <h3 className="text-xl font-bold" style={{ color: primaryColor }}>
              {company}
            </h3>
            <div 
              className="flex items-center px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
            >
              <Calendar size={14} className="mr-1" />
              <span>{duration}</span>
            </div>
          </div>
          <div 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            {position}
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ModernExperienceCard;