import React from 'react';
import TextInput from '../Portfolio/TextInput';

const SkillsTab = ({ skills, updateSkill, addSkill, primaryColor }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Skills</h3>
                <button
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <span>Add Skill</span>
                </button>
            </div>
            {skills.map((skill, index) => (
                <div key={index} className="space-y-3 p-4 border rounded-lg shadow-sm">
                    <TextInput
                        label="Skill Name"
                        value={skill.name}
                        onChange={(value) => updateSkill(index, 'name', value)}
                    />
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-gray-700">
                                Proficiency Level
                            </label>
                            <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${primaryColor} 0%, ${primaryColor} ${skill.level}%, #e5e7eb ${skill.level}%, #e5e7eb 100%)`
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsTab;