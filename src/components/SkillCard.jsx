import React from 'react';

function SkillCard({ name, level, color }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold mb-2">{name}</h3>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${level}%`,
            backgroundColor: color
          }}
        />
      </div>
      <span className="text-sm text-gray-600 mt-1">{level}%</span>
    </div>
  );
}

export default SkillCard;