import React from 'react';
import TextInput from '../Portfolio/TextInput';

const ProjectsTab = ({ projects, updateProject, addProject }) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Projects</h3>
                <button
                    onClick={addProject}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex items-center"
                >
                    <span>Add Project</span>
                </button>
            </div>
            {projects.map((project, index) => (
                <div key={index} className="space-y-3 p-4 border rounded-lg shadow-sm">
                    <TextInput
                        label="Project Title"
                        value={project.title}
                        onChange={(value) => updateProject(index, 'title', value)}
                    />
                    <TextInput
                        label="Project Image URL"
                        value={project.image}
                        onChange={(value) => updateProject(index, 'image', value)}
                    />
                    <TextInput
                        label="Project Link"
                        value={project.link}
                        onChange={(value) => updateProject(index, 'link', value)}
                    />
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            value={project.description}
                            onChange={(e) => updateProject(index, 'description', e.target.value)}
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            rows={3}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsTab;