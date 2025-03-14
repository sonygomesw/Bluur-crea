import React from 'react';
import { Video, Users, TrendingUp, ArrowDown, Rocket, Zap, Target } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Video className="w-6 h-6 text-blue-600" />,
      title: "Create",
      description: "We turn your existing content into thousands of high-performing short-form videos.",
      color: "bg-blue-50"
    },
    {
      icon: <Users className="w-6 h-6 text-gray-900" />,
      title: "Distribute",
      description: "We publish 1,800 – 18,000 videos across fully branded sub-accounts, ensuring market domination.",
      color: "bg-gray-50"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Convert",
      description: "All traffic is redirected to your socials, offers, and sales funnels, leading to massive audience growth and revenue.",
      color: "bg-green-50"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <Rocket className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-manrope leading-tight">
            Our Proven System for<br/>Viral Growth
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Transform your brand with our three-step process that consistently delivers results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group bg-white"
            >
              <div className="p-10">
                <div className="mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-manrope text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-manrope text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center font-manrope group"
          >
            Start Your Journey
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;