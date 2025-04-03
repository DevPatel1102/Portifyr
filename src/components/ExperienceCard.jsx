import React from 'react';

function ExperienceCard({ company, position, duration, description, color }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold" style={{ color }}>
          {company}
        </h3>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      <h4 className="text-lg text-gray-700 mb-2">{position}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ExperienceCard;