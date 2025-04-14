import { useState, useEffect } from "react";

export const Showcase=()=> {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = [
    {
      number: 1,
      title: "Select Your Template",
      description: "Choose from our professionally designed templates as your starting point."
    },
    {
      number: 2,
      title: "Customize Content",
      description: "Edit content, customize colors, and adjust layouts using our intuitive controls."
    },
    {
      number: 3,
      title: "Download",
      description: "Instantly download your portfolio and share it with employers or clients."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [steps.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-gray-50 mt-4">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="max-w-md mx-auto text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-indigo-600">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
       
          <div className="flex justify-center mt-8 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}