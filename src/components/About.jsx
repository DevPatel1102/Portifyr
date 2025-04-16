import { useState, useEffect } from "react";
import { Header } from "./LandingPage/Header";
import { Footer } from "./LandingPage/Footer";
import { useAuth } from "../components/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const FadeInElement = ({ children, delay = 0, direction = null, duration = 1000 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    let transformValue = "translateY(40px)";
    if (direction === "left") transformValue = "translateX(-40px)";
    if (direction === "right") transformValue = "translateX(40px)";

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : transformValue,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
    };

    return <div style={style}>{children}</div>;
};

const AboutHero = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-10"
                        style={{
                            width: `${Math.random() * 300 + 50}px`,
                            height: `${Math.random() * 300 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <FadeInElement delay={300}>
                    <h1 className="text-5xl font-bold mb-4">About Portifyr</h1>
                </FadeInElement>
                <FadeInElement delay={600}>
                    <p className="text-xl mb-6">We built this platform to make portfolio creation effortless and beautiful. No code, no clutter — just your story, your style, and your showcase. Perfect for students, professionals, and creatives to stand out online.</p>
                </FadeInElement>
            </div>
        </div>
    );
};

const MissionValues = () => {
    const values = [
        {
            title: "Innovation",
            description: "We constantly push the boundaries of what's possible in portfolio creation technology.",
            icon: "💡"
        },
        {
            title: "Simplicity",
            description: "We believe powerful tools should be easy to use for everyone, regardless of technical skill.",
            icon: "✨"
        },
        {
            title: "Creativity",
            description: "We empower users to express their unique creative vision without limitations.",
            icon: "🎨"
        },
        {
            title: "Community",
            description: "We foster a supportive community of creators who inspire and learn from each other.",
            icon: "👥"
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <FadeInElement>
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
                </FadeInElement>
                
                <FadeInElement delay={300}>
                    <div className="max-w-3xl mx-auto mb-16">
                        <p className="text-lg text-gray-700 text-center">
                            Our mission is to democratize portfolio creation, making it accessible to everyone while maintaining professional quality and customization options.
                        </p>
                    </div>
                </FadeInElement>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {values.map((value, index) => (
                        <FadeInElement key={index} delay={500 + index * 200}>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                        <div className="text-2xl">{value.icon}</div>
                                    </div>
                                    <h3 className="text-xl font-semibold">{value.title}</h3>
                                </div>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TeamSection = () => {
    const team = [
        {
            name: "Dev Patel",
            bio: "Full-stack developer focused on creating intuitive user experiences."
        },
        {
            name: "Kevin Barochiya",
            bio: "Former UX Designer with a passion for simplifying complex processes."
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6">
                <FadeInElement>
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
                </FadeInElement>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {team.map((member, index) => (
                            <FadeInElement key={index} delay={300 + index * 200}>
                                <div className="bg-gray-50 rounded-xl p-6 text-center">
                                    <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                    <p className="text-gray-600">{member.bio}</p>
                                </div>
                            </FadeInElement>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactCTA = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleStartClick = () => {
        if (user) {
            navigate("/portfolio");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <FadeInElement>
                    <h2 className="text-3xl font-bold mb-6">Ready to Build Your Portfolio?</h2>
                </FadeInElement>
                <FadeInElement delay={300}>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of professionals who are showcasing their work with Portifyr's intuitive portfolio builder.
                    </p>
                </FadeInElement>
                <FadeInElement delay={600}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleStartClick}
                            className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300"
                        >
                            Start Building Now
                        </button>
                        <p
                            onClick={()=>navigate("/contact")}
                            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-20 transform hover:scale-105 transition duration-300"
                        >
                            Contact Us
                        </p>
                    </div>
                </FadeInElement>
            </div>
        </div>
    );
};

const AppStyles = () => {
    return (
        <style jsx="true">{`
      @keyframes float {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(5deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
      
      .animate-visible {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
      }
    `}</style>
    );
};

export const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(item => {
            observer.observe(item);
        });

        return () => {
            document.querySelectorAll('.animate-on-scroll').forEach(item => {
                observer.unobserve(item);
            });
        };
    }, []);

    return (
        <>
            <AppStyles />
            <Header />
            <AboutHero />
            <MissionValues />
            <TeamSection />
            <ContactCTA />
            <Footer />
        </>
    );
};