import React from 'react';
import { Github, Linkedin, Mail, Twitter, Code, Briefcase, Award } from 'lucide-react';
import ModernSkillCard from '../Portfolio/ModernSkillCard';
import ModernProjectCard from '../Portfolio/ModernProjectCard';
import ModernExperienceCard from '../Portfolio/ModernExperienceCard';

const ModernTemplate = ({ portfolio }) => {
    return (
        <div className="max-w-2xl mx-auto border">
            <div className="relative mb-12">
                <div
                    className="absolute top-0 left-0 right-0 h-48 rounded-t-xl"
                    style={{ backgroundColor: portfolio.primaryColor }}
                ></div>
                <div className="relative pt-28 px-6 pb-6 flex flex-col md:flex-row gap-8 items-center md:items-end">
                    <img
                        src={portfolio.image}
                        alt={portfolio.name}
                        className="w-36 h-36 rounded-xl object-cover border-4 border-white shadow-xl relative z-10"
                    />
                    <div className="text-center md:text-left z-10">
                        <h1 className="text-4xl font-bold mb-1 text-white md:text-gray-800"
                            style={{ color: portfolio.nameColor }} 
                        >
                            {portfolio.name}
                        </h1>
                        <div
                            className="px-3 py-1 inline-block rounded-full text-sm mb-3"
                            style={{ backgroundColor: portfolio.accentColor, color: 'white' }}
                        >
                            {portfolio.title}
                        </div>
                        <div className="flex justify-center md:justify-start space-x-3 mt-2">
                            <a
                                href={`https://${portfolio.social.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-sm"
                                style={{ color: portfolio.secondaryColor }}
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href={`https://${portfolio.social.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                style={{ color: portfolio.secondaryColor }}
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href={`https://${portfolio.social.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                style={{ color: portfolio.secondaryColor }}
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href={`mailto:${portfolio.social.email}`}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                style={{ color: portfolio.secondaryColor }}
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-700 leading-relaxed">{portfolio.bio}</p>
                </div>
            </div>

            <div className="space-y-12 px-6">
                <section>
                    <h2
                        className="text-2xl font-bold relative pb-2 mb-6 inline-block"
                        style={{ color: portfolio.primaryColor }}
                    >
                        Skills
                        <span
                            className="absolute bottom-0 left-0 w-1/2 h-1 rounded"
                            style={{ backgroundColor: portfolio.accentColor }}
                        ></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {portfolio.skills.map((skill, index) => (
                            <ModernSkillCard
                                key={index}
                                name={skill.name}
                                level={skill.level}
                                primaryColor={portfolio.primaryColor}
                                accentColor={portfolio.accentColor}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2
                        className="text-2xl font-bold relative pb-2 mb-6 inline-block"
                        style={{ color: portfolio.primaryColor }}
                    >
                        Projects
                        <span
                            className="absolute bottom-0 left-0 w-1/2 h-1 rounded"
                            style={{ backgroundColor: portfolio.accentColor }}
                        ></span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {portfolio.projects.map((project, index) => (
                            <ModernProjectCard
                                key={index}
                                {...project}
                                primaryColor={portfolio.primaryColor}
                                accentColor={portfolio.accentColor}
                            />
                        ))}
                    </div>
                </section>

                <section>
                    <h2
                        className="text-2xl font-bold relative pb-2 mb-6 inline-block"
                        style={{ color: portfolio.primaryColor }}
                    >
                        Experience
                        <span
                            className="absolute bottom-0 left-0 w-1/2 h-1 rounded"
                            style={{ backgroundColor: portfolio.accentColor }}
                        ></span>
                    </h2>
                    <div className="space-y-6">
                        {portfolio.experience.map((exp, index) => (
                            <ModernExperienceCard
                                key={index}
                                {...exp}
                                primaryColor={portfolio.primaryColor}
                                accentColor={portfolio.accentColor}
                                isLast={index === portfolio.experience.length - 1}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div >
    );
}

export default ModernTemplate;