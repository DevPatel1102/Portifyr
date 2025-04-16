import { useState, useEffect } from "react";
import { Header } from "./LandingPage/Header";
import { Footer } from "./LandingPage/Footer";
import { useAuth } from "./Auth/AuthContext";
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

const PlanFeature = ({ included, text }) => (
    <div className="flex items-center mb-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${included ? 'bg-green-500' : 'bg-gray-300'}`}>
            {included ? (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            ) : (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            )}
        </div>
        <span className="text-gray-700">{text}</span>
    </div>
);

const PricingPlan = ({ title, price, features, popular, ctaText }) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleClick = () => {
        if (user) {
            navigate("/", { state: { plan: title } });
        } else {
            navigate("/login", { state: { redirectTo: "/pricing", plan: title } });
        }
    };

    return (
        <div className={`bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${popular ? 'border-2 border-indigo-500 relative' : ''}`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                </div>
            )}
            <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">₹{price}</span>
                    {price > 0 && <span className="text-gray-600 ml-2">/month</span>}
                </div>
                <div className="mb-8">
                    {features.map((feature, index) => (
                        <PlanFeature key={index} included={feature.included} text={feature.text} />
                    ))}
                </div>
                <button 
                    onClick={handleClick}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        popular 
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90' 
                            : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'
                    }`}
                >
                    {ctaText}
                </button>
            </div>
        </div>
    );
};

const PricingHeader = () => {
    return (
        <div className="text-center mb-16">
            <FadeInElement delay={300}>
                <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            </FadeInElement>
            <FadeInElement delay={500}>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Choose the plan that best fits your needs. All plans include our core features with different levels of customization.
                </p>
            </FadeInElement>
        </div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            title: "Free",
            price: 0,
            features: [
                { included: true, text: "1 portfolio website" },
                { included: true, text: "Basic templates" },
                { included: true, text: "Core editor features" },
                { included: false, text: "Custom domain" },
                { included: false, text: "Remove Portifyr branding" },
                { included: false, text: "Advanced analytics" },
            ],
            popular: false,
            ctaText: "Get Started Free",
        },
        {
            title: "Professional",
            price: 599,
            features: [
                { included: true, text: "3 portfolio websites" },
                { included: true, text: "All templates" },
                { included: true, text: "Advanced editor features" },
                { included: true, text: "Custom domain" },
                { included: true, text: "Remove Portifyr branding" },
                { included: false, text: "Advanced analytics" },
            ],
            popular: true,
            ctaText: "Start Pro Plan",
        },
        {
            title: "Enterprise",
            price: 999,
            features: [
                { included: true, text: "Unlimited portfolios" },
                { included: true, text: "Premium templates" },
                { included: true, text: "Full editor capabilities" },
                { included: true, text: "Multiple custom domains" },
                { included: true, text: "White label solution" },
                { included: true, text: "Advanced analytics dashboard" },
            ],
            popular: false,
            ctaText: "Premium Plan",
        },
    ];

    return (
        <div className="container mx-auto px-6 py-16">
            <PricingHeader />
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan, index) => (
                    <FadeInElement key={index} delay={700 + index * 200}>
                        <PricingPlan {...plan} />
                    </FadeInElement>
                ))}
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your billing period."
        },
        {
            question: "Do you offer student discounts?",
            answer: "Yes! We offer a 50% discount for students with a valid student email address. Contact our support team to apply."
        },
        {
            question: "Can I upgrade or downgrade my plan later?",
            answer: "Absolutely! You can change your plan at any time. When upgrading, you'll pay the prorated difference. When downgrading, the change will apply at the end of your billing period."
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <FadeInElement>
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                </FadeInElement>
                
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FadeInElement key={index} delay={300 + index * 150}>
                            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>
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
        `}</style>
    );
};

const CallToAction = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const handleClick = () => {
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
                    <h2 className="text-3xl font-bold mb-4">Ready to build your professional portfolio?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of creatives who trust Portifyr to showcase their work to the world.
                    </p>
                    <button 
                        onClick={() => handleClick()}
                        className="bg-white text-indigo-600 px-8 py-3 rounded-lg shadow-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition duration-300"
                    >
                        Start Your Free Trial
                    </button>
                </FadeInElement>
            </div>
        </div>
    );
};

export const PricingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <FadeInElement delay={300}>
                        <h1 className="text-5xl font-bold mb-4">Choose Your Plan</h1>
                    </FadeInElement>
                    <FadeInElement delay={500}>
                        <p className="text-xl mb-4">Find the perfect option for your portfolio needs</p>
                    </FadeInElement>
                </div>
            </div>
            <PricingSection />
            <FAQ />
            <CallToAction />
            <Footer />
        </>
    );
};