import React from 'react';

function ModernSkillCard({ name, level, primaryColor, accentColor }) {
  // Calculate a lighter version of the primary color for the background
  const getBgColor = (color) => {
    return `color-mix(in srgb, ${color} 8%, transparent)`;
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{
        backgroundColor: getBgColor(primaryColor)
      }}
    >
      {/* Decorative corner accent */}
      <div 
        className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45"
        style={{ backgroundColor: `color-mix(in srgb, ${accentColor} 15%, transparent)` }}
      />
      
      <div className="relative p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 
            className="font-bold text-lg tracking-tight"
            style={{ color: primaryColor }}
          >
            {name}
          </h3>
          <div 
            className="flex items-center justify-center w-14 h-14 rounded-full text-sm font-semibold transition-transform duration-300 group-hover:scale-110"
            style={{ 
              backgroundColor: `color-mix(in srgb, ${primaryColor} 10%, transparent)`,
              color: primaryColor,
              border: `2px solid ${primaryColor}30`,
              boxShadow: `0 0 0 4px ${getBgColor(primaryColor)}`
            }}
          >
            {level}%
          </div>
        </div>

        {/* Progress bar container */}
        <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm">
          {/* Progress bar */}
          <div
            className="h-full rounded-full transition-all duration-500 group-hover:shadow-lg relative"
            style={{
              width: `${level}%`,
              background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
            }}
          >
            {/* Animated shine effect */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                animation: 'shine 2s infinite'
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-1 w-full transform transition-transform duration-300 group-hover:scale-x-100 scale-x-[85%]"
        style={{ 
          background: `linear-gradient(to right, ${primaryColor}, ${accentColor})`,
        }}
      />

      <style jsx>{`
        @keyframes shine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default ModernSkillCard;