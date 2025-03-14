import React from 'react';
import { ArrowRight, Package, Star } from 'lucide-react';

const PricingSection = () => {
  const stats = [
    {
      value: "2B+",
      label: "Total Views",
      description: "Across all platforms",
      icon: "https://i.imgur.com/8FXwGZ3.png",
      color: "bg-blue-50"
    },
    {
      value: "100+",
      label: "Brands Helped",
      description: "Success stories",
      icon: "https://i.imgur.com/JxFYXuI.png",
      color: "bg-gray-50"
    },
    {
      value: "500+",
      label: "Creator Network",
      description: "Global reach",
      icon: "https://i.imgur.com/vwvnqhd.png",
      color: "bg-green-50"
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <Star className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-manrope leading-tight">
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
              className="rounded-3xl overflow-hidden bg-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 p-10 group"
            >
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  <img 
                    src={stat.icon} 
                    alt={stat.label} 
                    className="w-7 h-7"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-4 text-gray-900 font-manrope tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-gray-900 mb-2 font-manrope">
                  {stat.label}
                </p>
                <p className="text-gray-600 font-medium font-manrope">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <a 
            href="https://calendly.com/creatorflowlab/30min-call" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center font-manrope group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;