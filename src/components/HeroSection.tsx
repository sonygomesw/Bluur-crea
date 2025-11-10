import React, { useEffect, useState } from 'react';
import { ArrowDown, Zap, Globe, TrendingUp, Music, Camera, ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Background Elements with enhanced animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-100/30 to-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-100/30 to-violet-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-200/40 via-fuchsia-200/40 to-blue-200/40 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative rounded-3xl">
                  <img 
                    src="https://i.imgur.com/196ODOB.png" 
                    alt="Bluur Creator Logo" 
                    className="h-32 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
              
            <h1
              className={`font-manrope text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 mb-4 leading-[1.1] transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We Don't Just Make<br/>You Go Viral.<br/>We Make It Pay Off.
            </h1>

            <p
              className={`font-manrope text-xl md:text-2xl text-gray-600 mb-8 transform transition-all duration-1000 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Because going viral isn't about views —<br/>
              it's about what those views create.
            </p>

            {/* Brand Logos Section */}
            <div className={`w-full mb-12 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-sm text-gray-500 mb-6 font-manrope uppercase tracking-wider">Trusted by Leading Brands</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/640px-H%26M-Logo.svg.png"
                     alt="H&M"
                     className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300" />
                <img src="https://i.imgur.com/CgYWfau.jpeg"
                     alt="Gymshark"
                     className="h-10 md:h-14 opacity-60 hover:opacity-100 transition-opacity duration-300 object-contain mix-blend-multiply" />
              </div>
            </div>
            
            <div className={`space-y-6 mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                <div className="flex items-start group flex-1">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-xl mr-3 group-hover:scale-110 transition-all duration-300 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-violet-200/50 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Music className="w-5 h-5 text-violet-600 relative z-10" />
                  </span>
                  <div className="text-left">
                    <p className="text-base md:text-lg text-gray-900 font-manrope font-semibold">For Artists</p>
                    <p className="text-sm md:text-base text-gray-600 font-manrope">More streams, followers, bookings & label deals</p>
                  </div>
                </div>

                <div className="flex items-start group flex-1">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl mr-3 group-hover:scale-110 transition-all duration-300 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-200/50 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Camera className="w-5 h-5 text-blue-600 relative z-10" />
                  </span>
                  <div className="text-left">
                    <p className="text-base md:text-lg text-gray-900 font-manrope font-semibold">For Creators</p>
                    <p className="text-sm md:text-base text-gray-600 font-manrope">More clients, sales & collaborations</p>
                  </div>
                </div>

                <div className="flex items-start group flex-1">
                  <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mr-3 group-hover:scale-110 transition-all duration-300 relative flex-shrink-0">
                    <div className="absolute inset-0 bg-green-200/50 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <ShoppingBag className="w-5 h-5 text-green-600 relative z-10" />
                  </span>
                  <div className="text-left">
                    <p className="text-base md:text-lg text-gray-900 font-manrope font-semibold">For Brands</p>
                    <p className="text-sm md:text-base text-gray-600 font-manrope">More sales, traffic & brand authority</p>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 font-manrope text-center">
                2B+ organic views turned into millions of streams, sales & real growth.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={scrollToPricing}
                className={`group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center relative overflow-hidden transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Launch Your Viral Campaign</span>
                <ArrowDown className="relative z-10 ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>

              <p className={`text-sm text-gray-500 font-manrope transform transition-all duration-1000 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                From $400 campaigns to full-scale viral domination.
              </p>
            </div>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-10 text-gray-500 font-manrope transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-fuchsia-100 to-violet-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-4 h-4 text-fuchsia-600" />
              </span>
              <span className="group-hover:text-gray-900 transition-colors duration-300">Organic Growth</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-violet-100 to-blue-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-4 h-4 text-violet-600" />
              </span>
              <span className="group-hover:text-gray-900 transition-colors duration-300">Viral Content</span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mr-2 group-hover:scale-110 transition-all duration-300">
                <Globe className="w-4 h-4 text-blue-600" />
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