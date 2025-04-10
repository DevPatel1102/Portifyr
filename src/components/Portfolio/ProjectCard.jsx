import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCard({ title, description, image, link, color, accentColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            background: `linear-gradient(to bottom right, ${color}, transparent)` 
          }}
        ></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2" style={{ color }}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-lg text-white transition-colors duration-200"
          style={{ backgroundColor: color }}
        >
          <ExternalLink size={16} className="mr-2" />
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;