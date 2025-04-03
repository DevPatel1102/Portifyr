import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, Briefcase, Award, Book, Code } from 'lucide-react';
import ColorPicker from './components/ColorPicker';
import TextInput from './components/TextInput';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';

function App() {
  const [portfolio, setPortfolio] = useState({
    name: 'Dev Patel',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with expertise in React, Node.js, and cloud technologies.',
    primaryColor: '#3b82f6',
    secondaryColor: '#1e40af',
    backgroundColor: '#f3f4f6',
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

  return (
    <div className="min-h-screen flex">
      {/* Customization Panel */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Portifyr</h1>
          
          <div className="space-y-6">
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
                className="w-full p-2 border rounded-md"
                rows={4}
              />
            </div>

            <TextInput
              label="Profile Image URL"
              value={portfolio.image}
              onChange={(value) => updatePortfolio('image', value)}
            />

            <div className="space-y-4">
              <h3 className="font-semibold">Colors</h3>
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

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Skills</h3>
                <button
                  onClick={addSkill}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add Skill
                </button>
              </div>
              {portfolio.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <TextInput
                    label="Skill Name"
                    value={skill.name}
                    onChange={(value) => updateSkill(index, 'name', value)}
                  />
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Proficiency Level (0-100)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.level}
                      onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Projects</h3>
                <button
                  onClick={addProject}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add Project
                </button>
              </div>
              {portfolio.projects.map((project, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-md">
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
                  <textarea
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) => updateProject(index, 'description', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Experience</h3>
                <button
                  onClick={addExperience}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add Experience
                </button>
              </div>
              {portfolio.experience.map((exp, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-md">
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
                  <textarea
                    placeholder="Job Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Social Links</h3>
              <TextInput
                label="GitHub"
                value={portfolio.social.github}
                onChange={(value) => updateSocial('github', value)}
              />
              <TextInput
                label="LinkedIn"
                value={portfolio.social.linkedin}
                onChange={(value) => updateSocial('linkedin', value)}
              />
              <TextInput
                label="Twitter"
                value={portfolio.social.twitter}
                onChange={(value) => updateSocial('twitter', value)}
              />
              <TextInput
                label="Email"
                value={portfolio.social.email}
                onChange={(value) => updateSocial('email', value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div 
        className="w-1/2 p-8 overflow-y-auto"
        style={{ backgroundColor: portfolio.backgroundColor }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={portfolio.image}
              alt={portfolio.name}
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />
            
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ color: portfolio.primaryColor }}
            >
              {portfolio.name}
            </h1>
            
            <h2 
              className="text-2xl mb-6"
              style={{ color: portfolio.secondaryColor }}
            >
              {portfolio.title}
            </h2>
            
            <p className="text-gray-700 mb-8 text-lg">
              {portfolio.bio}
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href={`https://${portfolio.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href={`https://${portfolio.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`https://${portfolio.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href={`mailto:${portfolio.social.email}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-6">
                <Code className="mr-2" size={24} style={{ color: portfolio.primaryColor }} />
                <h2 className="text-2xl font-bold" style={{ color: portfolio.primaryColor }}>
                  Skills
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
              <div className="flex items-center mb-6">
                <Briefcase className="mr-2" size={24} style={{ color: portfolio.primaryColor }} />
                <h2 className="text-2xl font-bold" style={{ color: portfolio.primaryColor }}>
                  Projects
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
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
              <div className="flex items-center mb-6">
                <Award className="mr-2" size={24} style={{ color: portfolio.primaryColor }} />
                <h2 className="text-2xl font-bold" style={{ color: portfolio.primaryColor }}>
                  Experience
                </h2>
              </div>
              <div className="space-y-6">
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
  );
}

export default App;