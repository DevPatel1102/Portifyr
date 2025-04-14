import React, { useState, useEffect, useRef } from 'react';
import logo from "../../src/assets/images/portifyr_logo.png";

import Header from '../components/PortfolioPageComponents/Header';
import Sidebar from '../components/PortfolioPageComponents/Sidebar';
import ProfessionalTemplate from '../components/PortfolioPageComponents/ProfessionalTemplate';
import ModernTemplate from '../components/PortfolioPageComponents/ModernTemplate';
import { downloadPortfolio } from '../components/PortfolioPageComponents/downloadPortfolio';

export const PortfolioPage = () => {
    const [loading, setLoading] = useState(true);
    const [portfolio, setPortfolio] = useState({
        name: 'Dev Patel',
        title: 'Web Developer',
        bio: 'Passionate developer with expertise in React, Node.js, and cloud technologies.',
        primaryColor: '#3b82f6',
        secondaryColor: '#1e40af',
        backgroundColor: '#f8fafc',
        textColor: '#1e293b',
        accentColor: '#000000',
        nameColor: '#000000',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Node.js', level: 85 },
            { name: 'JavaScript', level: 95 },
            { name: 'Python', level: 80 }
        ],
        projects: [
            {
                title: 'E-commerce Platform',
                description: 'Built a full-stack e-commerce platform using MERN stack',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=400',
                link: 'https://github.com/project1'
            },
            {
                title: 'Task Management App',
                description: 'Developed a real-time task management application',
                image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=400',
                link: 'https://github.com/project2'
            }
        ],
        experience: [
            {
                company: 'Tech Corp',
                position: 'Senior Developer',
                duration: '2020 - Present',
                description: 'Leading frontend development team and architecting solutions'
            },
            {
                company: 'StartUp Inc',
                position: 'Full Stack Developer',
                duration: '2018 - 2020',
                description: 'Developed and maintained multiple web applications'
            }
        ],
        social: {
            github: 'github.com/johndoe',
            linkedin: 'linkedin.com/in/johndoe',
            twitter: 'twitter.com/johndoe',
            email: 'john@example.com'
        }
    });

    const previewRef = useRef(null);
    const [previewHeight, setPreviewHeight] = useState('100vh');
    const [activeTab, setActiveTab] = useState('general');
    const [templateDropdownOpen, setTemplateDropdownOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState('professional');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);         
        return () => clearTimeout(timer);
    }, []);
    
    
    useEffect(() => {
        const updateHeight = () => {
            setPreviewHeight(`${window.innerHeight}px`);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (templateDropdownOpen && !event.target.closest('.template-dropdown')) {
                setTemplateDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [templateDropdownOpen]);

    const updatePortfolio = (key, value) => {
        setPortfolio(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const updateSocial = (key, value) => {
        setPortfolio(prev => ({
            ...prev,
            social: {
                ...prev.social,
                [key]: value
            }
        }));
    };

    const updateSkill = (index, field, value) => {
        setPortfolio(prev => {
            const newSkills = [...prev.skills];
            newSkills[index] = { ...newSkills[index], [field]: value };
            return { ...prev, skills: newSkills };
        });
    };

    const addSkill = () => {
        setPortfolio(prev => ({
            ...prev,
            skills: [...prev.skills, { name: 'New Skill', level: 50 }]
        }));
    };

    const updateProject = (index, field, value) => {
        setPortfolio(prev => {
            const newProjects = [...prev.projects];
            newProjects[index] = { ...newProjects[index], [field]: value };
            return { ...prev, projects: newProjects };
        });
    };

    const addProject = () => {
        setPortfolio(prev => ({
            ...prev,
            projects: [...prev.projects, {
                title: 'New Project',
                description: 'Project description',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400',
                link: 'https://github.com'
            }]
        }));
    };

    const updateExperience = (index, field, value) => {
        setPortfolio(prev => {
            const newExperience = [...prev.experience];
            newExperience[index] = { ...newExperience[index], [field]: value };
            return { ...prev, experience: newExperience };
        });
    };

    const addExperience = () => {
        setPortfolio(prev => ({
            ...prev,
            experience: [...prev.experience, {
                company: 'New Company',
                position: 'Position',
                duration: '2023 - Present',
                description: 'Job description'
            }]
        }));
    };

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
        setTemplateDropdownOpen(false);
    };

    const handleDownload = () => {
        downloadPortfolio(portfolio, selectedTemplate);
    };
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
                <div className="flex flex-col items-center">
                    <img 
                        src={logo} 
                        alt="Portifyr Logo" 
                        className="w-32 h-32 mb-6 animate-bounce" 
                    />
                    
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <div className="text-3xl font-bold text-blue-600">Portifyr</div>
                    </div>
                    
                    <div className="flex space-x-2">
                        <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-4 h-4 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        <div className="w-4 h-4 rounded-full bg-blue-300 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    
                    <div className="mt-4 text-blue-800">
                        Loading your portfolio...
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
            <Header 
                logo={logo} 
                selectedTemplate={selectedTemplate}
                templateDropdownOpen={templateDropdownOpen}
                setTemplateDropdownOpen={setTemplateDropdownOpen}
                handleTemplateChange={handleTemplateChange}
                handleDownload={handleDownload}
            />
            
            <div className="flex max-w-full mx-auto px-8 py-4 gap-6 h-screenoverflow-hidden">
                <Sidebar
                    portfolio={portfolio}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    updatePortfolio={updatePortfolio}
                    updateSocial={updateSocial}
                    updateSkill={updateSkill}
                    addSkill={addSkill}
                    updateProject={updateProject}
                    addProject={addProject}
                    updateExperience={updateExperience}
                    addExperience={addExperience}
                />
                
                <div
                    ref={previewRef}
                    className="w-1/2 rounded-xl overflow-y-auto shadow-2xl"
                    style={{ backgroundColor: portfolio.backgroundColor, height: previewHeight }}
                >
                    <div className="p-8">
                        {selectedTemplate === 'professional' ? (
                            <ProfessionalTemplate portfolio={portfolio} />
                        ) : (
                            <ModernTemplate portfolio={portfolio} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};