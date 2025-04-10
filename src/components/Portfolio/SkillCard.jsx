import React from 'react';

function SkillCard({ name, level, color }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-sm font-medium px-2 py-1 rounded" style={{ backgroundColor: color + '20', color }}>
          {level}%
        </span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${level}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}50`
          }}
        />
      </div>
    </div>
  );
}

export default SkillCard;