import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter, Briefcase, Award, Book, Code, ExternalLink, Palette, User, FileText } from 'lucide-react';
import logo from "../../src/assets/images/portifyr_logo.png";
import ColorPicker from './Portfolio/ColorPicker';
import TextInput from './Portfolio/TextInput';
import SkillCard from './Portfolio/SkillCard';
import ProjectCard from './Portfolio/ProjectCard';
import ExperienceCard from './Portfolio/ExperienceCard';

export const PortfolioPage = () => {
    const [portfolio, setPortfolio] = useState({
        name: 'Dev Patel',
        title: 'Web Developer',
        bio: 'Passionate developer with expertise in React, Node.js, and cloud technologies.',
        primaryColor: '#3b82f6',
        secondaryColor: '#1e40af',
        backgroundColor: '#f8fafc',
        textColor: '#1e293b',
        accentColor: '#f97316',
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
    
    // Update preview container height based on window height
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
    const tabContent = {
        general: (
            <>
                <TextInput
                    label="Name"
                    value={portfolio.name}
                    onChange={(value) => updatePortfolio('name', value)}
                />

                <TextInput
                    label="Title"
                    value={portfolio.title}
                    onChange={(value) => updatePortfolio('title', value)}
                />

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Bio</label>
                    <textarea
                        value={portfolio.bio}
                        onChange={(e) => updatePortfolio('bio', e.target.value)}
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={4}
                    />
                </div>

                <TextInput
                    label="Profile Image URL"
                    value={portfolio.image}
                    onChange={(value) => updatePortfolio('image', value)}
                />

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Colors</h3>
                    <ColorPicker
                        label="Primary Color"
                        value={portfolio.primaryColor}
                        onChange={(value) => updatePortfolio('primaryColor', value)}
                    />
                    <ColorPicker
                        label="Secondary Color"
                        value={portfolio.secondaryColor}
                        onChange={(value) => updatePortfolio('secondaryColor', value)}
                    />
                    <ColorPicker
                        label="Background Color"
                        value={portfolio.backgroundColor}
                        onChange={(value) => updatePortfolio('backgroundColor', value)}
                    />
                </div>
            </>
        ),
        skills: (
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
                {portfolio.skills.map((skill, index) => (
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
                                    backgroundImage: `linear-gradient(to right, ${portfolio.primaryColor} 0%, ${portfolio.primaryColor} ${skill.level}%, #e5e7eb ${skill.level}%, #e5e7eb 100%)`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        ),
        projects: (
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
                {portfolio.projects.map((project, index) => (
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
        ),
        experience: (
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
                {portfolio.experience.map((exp, index) => (
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
        ),
        social: (
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social Links</h3>
                <TextInput
                    label="GitHub"
                    value={portfolio.social.github}
                    onChange={(value) => updateSocial('github', value)}
                    icon={<Github size={18} />}
                />
                <TextInput
                    label="LinkedIn"
                    value={portfolio.social.linkedin}
                    onChange={(value) => updateSocial('linkedin', value)}
                    icon={<Linkedin size={18} />}
                />
                <TextInput
                    label="Twitter"
                    value={portfolio.social.twitter}
                    onChange={(value) => updateSocial('twitter', value)}
                    icon={<Twitter size={18} />}
                />
                <TextInput
                    label="Email"
                    value={portfolio.social.email}
                    onChange={(value) => updateSocial('email', value)}
                    icon={<Mail size={18} />}
                />
            </div>
        )
    };

    const TabButton = ({ name, icon, label }) => (
        <button
            onClick={() => setActiveTab(name)}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTab === name
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-blue-100 text-gray-700'
            }`}
        >
            {icon}
            <span className="ml-2">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
            <header className="bg-white shadow-md py-4">
                <div className="max-w-full mx-auto px-20 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Portifyr Logo" className="h-10 w-auto mr-3 object-contain" />
                        <span className="text-2xl font-bold text-indigo-600">Portifyr</span>
                    </div>
                    <div className="space-x-2">
                        <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition duration-200">
                            Download
                        </button>
                    </div>
                </div>
            </header>
        <div className="flex max-w-full mx-auto px-8 py-4 gap-6 h-screenoverflow-hidden">
            {/* Editor Section*/}
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
                        {tabContent[activeTab]}
                    </div>
                </div>
            </div>

            {/* Portfolio Preview */}
            <div ref={previewRef} className="w-1/2 rounded-xl overflow-y-auto shadow-2xl" style={{ backgroundColor: portfolio.backgroundColor,height: previewHeight }}>
                <div className="p-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <img
                                src={portfolio.image}
                                alt={portfolio.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                            />

                            <h1
                                className="text-3xl font-bold mb-2"
                                style={{ color: portfolio.primaryColor }}
                            >
                                {portfolio.name}
                            </h1>

                            <h2
                                className="text-xl mb-4"
                                style={{ color: portfolio.secondaryColor }}
                            >
                                {portfolio.title}
                            </h2>

                            <p className="text-gray-700 mb-6">
                                {portfolio.bio}
                            </p>

                            <div className="flex justify-center space-x-4 mb-8">
                                <a
                                    href={`https://${portfolio.social.github}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={`https://${portfolio.social.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href={`https://${portfolio.social.twitter}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href={`mailto:${portfolio.social.email}`}
                                    className="text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <div className="flex items-center mb-4">
                                    <Code className="mr-2" size={20} style={{ color: portfolio.primaryColor }} />
                                    <h2 className="text-xl font-bold" style={{ color: portfolio.primaryColor }}>
                                        Skills
                                    </h2>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {portfolio.skills.map((skill, index) => (
                                        <SkillCard
                                            key={index}
                                            name={skill.name}
                                            level={skill.level}
                                            color={portfolio.primaryColor}
                                        />
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center mb-4">
                                    <Briefcase className="mr-2" size={20} style={{ color: portfolio.primaryColor }} />
                                    <h2 className="text-xl font-bold" style={{ color: portfolio.primaryColor }}>
                                        Projects
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    {portfolio.projects.map((project, index) => (
                                        <ProjectCard
                                            key={index}
                                            {...project}
                                            color={portfolio.primaryColor}
                                        />
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center mb-4">
                                    <Award className="mr-2" size={20} style={{ color: portfolio.primaryColor }} />
                                    <h2 className="text-xl font-bold" style={{ color: portfolio.primaryColor }}>
                                        Experience
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {portfolio.experience.map((exp, index) => (
                                        <ExperienceCard
                                            key={index}
                                            {...exp}
                                            color={portfolio.primaryColor}
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};