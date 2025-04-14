import React, { useState, useEffect } from 'react';
import { Star, Lightbulb, Palette, Download, Users, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

export const Features = () => {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "UX Designer",
            rating: 5,
            comment: "Portifyr helped me create a stunning portfolio in minutes!"
        },
        {
            name: "James Wilson",
            role: "Web Developer",
            rating: 4,
            comment: "The real-time preview feature is a game-changer."
        },
        {
            name: "Maria Garcia",
            role: "Freelancer",
            rating: 4,
            comment: "Best portfolio builder I've ever used!"
        },
        {
            name: "Alex Thompson",
            role: "Product Designer",
            rating: 5,
            comment: "The customization options are incredible. Exactly what I needed!"
        },
        {
            name: "David Kim",
            role: "Creative Director",
            rating: 4,
            comment: "Finally, a portfolio builder that understands design!"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="bg-gradient-to-b from-white to-gray-50 mt-10">
            {/* <div className="container mx-auto px-6"> */}

                <div className="relative max-w-2xl mx-auto">
                    <div className="overflow-hidden">
                        <div
                            className="transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            <div className="flex">
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4"
                                    >
                                        <div className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-md">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-lg">{testimonial.name}</p>
                                                    <p className="text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.comment}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-indigo-600 w-4'
                                        : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default Features;