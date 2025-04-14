import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function ModernProjectCard({ title, description, image, link, primaryColor, accentColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover min-h-48 md:min-h-full"
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: `linear-gradient(135deg, ${primaryColor}80, ${accentColor}40)` 
            }}
          ></div>
        </div>
        <div className="md:w-3/5 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold" style={{ color: primaryColor }}>
              {title}
            </h3>
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${accentColor}20` }}
            >
              <ExternalLink size={16} style={{ color: accentColor }} />
            </div>
          </div>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-white transition-all duration-200 shadow-sm hover:shadow"
            style={{ 
              background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
            }}
          >
            <Github size={16} className="mr-2" />
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ModernProjectCard;