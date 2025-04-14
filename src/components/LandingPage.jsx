import { useState, useEffect } from "react";
import { Header } from "./LandingPage/Header";
import { Footer } from "./LandingPage/Footer";
import { Features } from "./LandingPage/Features";
import { Showcase } from "./LandingPage/Showcase";
import { InteractivePreviewSection } from "./LandingPage/InteractivePreviewSection";
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

const AnimatedHeroSection = () => {
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
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 overflow-hidden relative">
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
                    <h1 className="text-5xl font-bold mb-4">Build Your Portfolio Side-by-Side</h1>
                </FadeInElement>

                <FadeInElement delay={600}>
                    <p className="text-xl mb-8">Control your portfolio design with real-time previews. Edit on the left, see results on the right.</p>
                </FadeInElement>

                <FadeInElement delay={900}>
                    <button
                        onClick={handleStartClick}
                        className="bg-white text-indigo-600 px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300 animate-pulse"
                    >
                        Start Building Now
                    </button>
                </FadeInElement>
            </div>
        </div>

    );
};

const AnimatedFeatures = () => {
    const OriginalFeatures = Features;

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 py-16">
            <div className="container mx-auto px-6">
                <FadeInElement>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-center mb-8">
                            Why Choose Portifyr?
                        </h2>
                        <div className="flex items-center justify-center gap-1 mb-5">
                            {[...Array(5)].map((_, i) => (
                                <FadeInElement key={i} delay={300 + i * 100}>
                                    <div className="w-6 h-6 text-yellow-400 text-3xl">★</div>
                                </FadeInElement>
                            ))}
                        </div>
                        <p className="text-gray-600 text-lg">
                            Trusted by over 10,000+ creative professionals worldwide
                        </p>
                    </div>
                </FadeInElement>

                <div className="grid md:grid-cols-3 gap-8">
                    {["Smart Templates", "Custom Themes", "Instant Export"].map((title, i) => (
                        <FadeInElement key={i} delay={500 + i * 200}>
                            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                                    <div className="h-6 w-6 text-indigo-600">{i === 0 ? "💡" : i === 1 ? "🎨" : "📥"}</div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-gray-600">
                                    {i === 0 && "Professional templates that adapt to your content automatically."}
                                    {i === 1 && "Personalize your portfolio with our advanced theming system."}
                                    {i === 2 && "Instantly download your portfolio and share it with employers or clients."}
                                </p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>

                <FadeInElement delay={900}>
                    <OriginalFeatures />
                </FadeInElement>
            </div>
        </div>

    );
};

const AnimatedShowcase = () => {
    return (
        <div className="bg-gray-50 py-16">
            <FadeInElement>
                <Showcase />
            </FadeInElement>
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
      
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          opacity: 1;
        }
      }
      
      .animate-pulse {
        animation: pulse 1.5s infinite;
      }
    `}</style>
    );
};

export const LandingPage = () => {
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
            <AnimatedHeroSection />
            <InteractivePreviewSection />
            <AnimatedFeatures />
            <AnimatedShowcase />
            <Footer />
        </>
    );
};