import React, { useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const stats = [
    {
      value: "2B+",
      label: "Total Views",
      description: "Across all platforms",
      icon: "https://i.imgur.com/8FXwGZ3.png",
      color: "from-blue-50 to-blue-100",
      delay: "delay-0"
    },
    {
      value: "100+",
      label: "Brands Helped",
      description: "Success stories",
      icon: "https://i.imgur.com/JxFYXuI.png",
      color: "from-gray-50 to-gray-100",
      delay: "delay-150"
    },
    {
      value: "500+",
      label: "Creator Network",
      description: "Global reach",
      icon: "https://i.imgur.com/vwvnqhd.png",
      color: "from-green-50 to-green-100",
      delay: "delay-300"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center mb-20 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <Star className="w-8 h-8 text-blue-600 transform group-hover:rotate-45 transition-transform duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            Our Track Record of<br/>Exceptional Results
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Join hundreds of successful brands and creators who've achieved remarkable growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden bg-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group transform ${
                isVisible 
                  ? `translate-y-0 opacity-100 ${stat.delay}` 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="p-10 relative">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300 relative`}>
                      <div className="absolute inset-0 rounded-2xl bg-white/50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <img 
                        src={stat.icon} 
                        alt={stat.label} 
                        className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ filter: 'brightness(0)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900 mb-2 font-manrope group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {stat.label}
                    </p>
                    <p className="text-gray-600 font-medium font-manrope">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="https://calendly.com/creatorflowlab/30min-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center font-manrope relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;