import React from 'react';
import { User, Code, Briefcase, Award, ExternalLink } from 'lucide-react';
import TabContent from './TabContent';

const Sidebar = ({
    portfolio,
    activeTab,
    setActiveTab,
    updatePortfolio,
    updateSocial,
    updateSkill,
    addSkill,
    updateProject,
    addProject,
    updateExperience,
    addExperience
}) => {
    const TabButton = ({ name, icon, label }) => (
        <button
            onClick={() => setActiveTab(name)}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${activeTab === name
                ? 'bg-blue-500 text-white'
                : 'hover:bg-blue-100 text-gray-700'
                }`}
        >
            {icon}
            <span className="ml-2">{label}</span>
        </button>
    );

    return (
        <div className="w-1/2 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-6">
                <h2 className="text-xl font-bold mb-6 flex justify-center items-center">Customize Your Portfolio</h2>

                <div className="flex justify-center items-center space-x-2 mb-6 overflow-x-auto pb-2">
                    <TabButton name="general" icon={<User size={18} />} label="General" />
                    <TabButton name="skills" icon={<Code size={18} />} label="Skills" />
                    <TabButton name="projects" icon={<Briefcase size={18} />} label="Projects" />
                    <TabButton name="experience" icon={<Award size={18} />} label="Experience" />
                    <TabButton name="social" icon={<ExternalLink size={18} />} label="Social" />
                </div>

                <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
                    <TabContent
                        activeTab={activeTab}
                        portfolio={portfolio}
                        updatePortfolio={updatePortfolio}
                        updateSocial={updateSocial}
                        updateSkill={updateSkill}
                        addSkill={addSkill}
                        updateProject={updateProject}
                        addProject={addProject}
                        updateExperience={updateExperience}
                        addExperience={addExperience}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;