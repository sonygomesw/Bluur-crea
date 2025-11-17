import React, { useEffect, useState } from 'react';
import { Video, Users, TrendingUp, ArrowDown, Rocket, Zap, Target } from 'lucide-react';

const HowItWorks = () => {
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

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const steps = [
    {
      icon: <Rocket className="w-6 h-6 text-violet-600" />,
      title: "1. Send Us Your Song",
      description: "Give us your Spotify link or send us your track.",
      color: "from-violet-50 to-violet-100",
      iconColor: "text-violet-600",
      delay: "delay-0"
    },
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: "2. We Make Videos",
      description: "We create hundreds to thousands of TikTok videos with your song.",
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      delay: "delay-100"
    },
    {
      icon: <Users className="w-6 h-6 text-gray-900" />,
      title: "3. We Post Them Everywhere",
      description: "We post your videos on 1,000+ TikTok accounts every day.",
      color: "from-gray-50 to-gray-100",
      iconColor: "text-gray-900",
      delay: "delay-200"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "4. You Get Streams & Fans",
      description: "People see your song on TikTok, then stream it on Spotify and follow you.",
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
      delay: "delay-300"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center mb-20 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <Rocket className="w-8 h-8 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            4 simple steps to make your song go viral
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group bg-white transform ${
                isVisible 
                  ? `translate-y-0 opacity-100 ${step.delay}` 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="p-10 relative">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="mb-8 relative">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="relative">
                        {step.icon}
                        <div className="absolute inset-0 blur-sm opacity-40">{step.icon}</div>
                      </div>
                    </div>
                    {/* Connecting line for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 font-manrope text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-manrope text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 font-manrope">Start Your Journey</span>
            <ArrowDown className="relative z-10 ml-2 h-5 w-5 inline-block group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;