import React from 'react';
import { Github, Linkedin, Mail, Twitter, Code, Briefcase, Award } from 'lucide-react';
import SkillCard from '../Portfolio/SkillCard';
import ProjectCard from '../Portfolio/ProjectCard';
import ExperienceCard from '../Portfolio/ExperienceCard';

const ProfessionalTemplate = ({ portfolio }) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <img
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />

                <h1
                    className="text-3xl font-bold mb-2"
                    style={{ color: portfolio.nameColor }}
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
    );
}

export default ProfessionalTemplate;