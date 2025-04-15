import { useState, useEffect } from "react";
import { Header } from "./LandingPage/Header";
import { Footer } from "./LandingPage/Footer";
import { useAuth } from "../components/Auth/AuthContext";

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

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        // Pre-fill form if user is logged in
        if (user && user.displayName && user.email) {
            setFormData(prev => ({
                ...prev,
                name: user.displayName,
                email: user.email
            }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: user?.displayName || "",
                    email: user?.email || "",
                    subject: "",
                    message: ""
                });
            }, 3000);
        }, 1500);
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

            <div className="container mx-auto px-6 relative z-10">
                <FadeInElement delay={300}>
                    <h1 className="text-5xl font-bold mb-4 text-center">Get in Touch</h1>
                </FadeInElement>

                <FadeInElement delay={600}>
                    <p className="text-xl mb-12 text-center">Have questions or need help with your portfolio? We're here for you.</p>
                </FadeInElement>

                <div className="max-w-3xl mx-auto">
                    <FadeInElement delay={900}>
                        {isSubmitted ? (
                            <div className="bg-white text-indigo-600 p-8 rounded-lg shadow-lg text-center">
                                <div className="text-5xl mb-4">✓</div>
                                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                                <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                                        required
                                    />
                                </div>

                                <div className="mt-6">
                                    <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                                        required
                                    ></textarea>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'animate-pulse'}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </FadeInElement>
                </div>
            </div>
        </div>
    );
};

const ContactInfoSection = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Email Us", icon: "✉️", content: "support@portifyr.com" },
                        { title: "Call Us", icon: "📱", content: "+91 7016957669" },
                        { title: "Visit Us", icon: "📍", content: "Room No. 12 PDEU Raysan" }
                    ].map((item, i) => (
                        <FadeInElement key={i} delay={500 + i * 200}>
                            <div className="bg-gray-50 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <div className="text-3xl text-indigo-600">{item.icon}</div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                        </FadeInElement>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqs = [
        {
            question: "How do I get started with Portifyr?",
            answer: "Simply sign up for an account, choose a template, and start customizing your portfolio. Our side-by-side editor makes it easy to see changes in real-time."
        },
        {
            question: "Can I use my own domain name?",
            answer: "Yes! Portifyr allows you to connect your custom domain to your portfolio. You can set this up in the settings section after creating your account."
        },
        {
            question: "Is Portifyr free to use?",
            answer: "We offer a free basic plan that includes essential features. For advanced customization options and premium templates, check out our affordable Pro plan."
        },
        {
            question: "How can I export my portfolio?",
            answer: "You can export your portfolio with a single click. Go to the 'Export' tab in your dashboard and choose your preferred format."
        }
    ];

    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <FadeInElement>
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                </FadeInElement>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FadeInElement key={index} delay={300 + index * 100}>
                            <div className="mb-4">
                                <button
                                    className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow text-left font-medium text-lg hover:bg-gray-50 transition-all duration-300"
                                    onClick={() => setOpenItem(openItem === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="text-indigo-600 text-2xl">
                                        {openItem === index ? "−" : "+"}
                                    </span>
                                </button>
                                {openItem === index && (
                                    <div className="p-5 bg-white rounded-b-lg shadow-lg mt-1 text-gray-600">
                                        {faq.answer}
                                    </div>
                                )}
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
            
            .animate-pulse {
                animation: pulse 1.5s infinite;
            }
        `}</style>
    );
};

export const ContactPage = () => {
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
            <ContactFormSection />
            <ContactInfoSection />
            <FAQSection />
            <Footer />
        </>
    );
};