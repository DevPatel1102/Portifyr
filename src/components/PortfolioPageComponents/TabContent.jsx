import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import GeneralTab from './GeneralTab';
import SkillsTab from './SkillsTab';
import ProjectsTab from './ProjectsTab';
import ExperienceTab from './ExperienceTab';
import SocialTab from './SocialTab';

const TabContent = ({
    activeTab,
    portfolio,
    updatePortfolio,
    updateSocial,
    updateSkill,
    addSkill,
    updateProject,
    addProject,
    updateExperience,
    addExperience
}) => {
    const tabs = {
        general: (
            <GeneralTab 
                portfolio={portfolio} 
                updatePortfolio={updatePortfolio} 
            />
        ),
        skills: (
            <SkillsTab 
                skills={portfolio.skills} 
                updateSkill={updateSkill} 
                addSkill={addSkill}
                primaryColor={portfolio.primaryColor} 
            />
        ),
        projects: (
            <ProjectsTab 
                projects={portfolio.projects} 
                updateProject={updateProject} 
                addProject={addProject} 
            />
        ),
        experience: (
            <ExperienceTab 
                experience={portfolio.experience} 
                updateExperience={updateExperience} 
                addExperience={addExperience} 
            />
        ),
        social: (
            <SocialTab 
                social={portfolio.social} 
                updateSocial={updateSocial} 
            />
        )
    };

    return tabs[activeTab] || null;
};

export default TabContent;