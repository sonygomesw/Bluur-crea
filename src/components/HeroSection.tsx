import React, { useEffect, useState } from 'react';
import { ArrowDown, Zap, Globe, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-white">
      {/* Background Elements with enhanced animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-gray-50 to-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-gray-50 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">            
            <div 
              className={`flex justify-center mb-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-gray-100 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src="https://i.imgur.com/YrtN2BD.png" 
                  alt="Bluur Creator Logo" 
                  className="h-32 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500 hover:scale-105 relative"
                />
              </div>
            </div>
              
            <h1 
              className={`font-manrope text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-8 leading-[1.1] transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We Make Brands &<br/>Creators Go Viral.
            </h1>
            
            <div className={`space-y-6 mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <p className="text-lg md:text-xl text-gray-600 font-manrope flex items-center group">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mr-3 group-hover:scale-110 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Zap className="w-5 h-5 text-blue-600 relative z-10" />
                  </span>
                  <span className="group-hover:text-gray-900 transition-colors duration-300">2 Billion organic views</span>
                </p>
                <p className="text-lg md:text-xl text-gray-600 font-manrope flex items-center group">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mr-3 group-hover:scale-110 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Globe className="w-5 h-5 text-gray-600 relative z-10" />
                  </span>
                  <span className="group-hover:text-gray-900 transition-colors duration-300">Trusted by industry leaders</span>
                </p>
              </div>
            </div>
            
            <button 
              onClick={scrollToContact}
              className={`group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center relative overflow-hidden transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Get Started</span>
              <ArrowDown className="relative z-10 ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-10 text-gray-500 font-manrope transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </span>
              <span className="group-hover:text-gray-900 transition-colors duration-300">Organic Growth</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-4 h-4 text-blue-600" />
              </span>
              <span className="group-hover:text-gray-900 transition-colors duration-300">Viral Content</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <Globe className="w-4 h-4 text-gray-600" />
              </span>
              <span className="group-hover:text-gray-900 transition-colors duration-300">Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;