import React from 'react';
import TextInput from '../Portfolio/TextInput';

const ExperienceTab = ({ experience, updateExperience, addExperience }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Experience</h3>
                <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <span>Add Experience</span>
                </button>
            </div>
            {experience.map((exp, index) => (
                <div key={index} className="space-y-3 p-4 border rounded-lg shadow-sm">
                    <TextInput
                        label="Company"
                        value={exp.company}
                        onChange={(value) => updateExperience(index, 'company', value)}
                    />
                    <TextInput
                        label="Position"
                        value={exp.position}
                        onChange={(value) => updateExperience(index, 'position', value)}
                    />
                    <TextInput
                        label="Duration"
                        value={exp.duration}
                        onChange={(value) => updateExperience(index, 'duration', value)}
                    />
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(index, 'description', e.target.value)}
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceTab;