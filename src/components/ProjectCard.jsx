import React from 'react';

function ProjectCard({ title, description, image, link, color }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color }}>
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-md text-white transition-colors duration-200"
          style={{ backgroundColor: color }}
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;