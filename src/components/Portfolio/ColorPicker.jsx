import React from 'react';

function ColorPicker({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-10 h-10 rounded-lg cursor-pointer opacity-0 absolute inset-0 z-10"
          />
          <div 
            className="w-10 h-10 rounded-lg border border-gray-200 shadow-sm"
            style={{ backgroundColor: value }}
          ></div>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 pl-8 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded"
            style={{ backgroundColor: value }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;