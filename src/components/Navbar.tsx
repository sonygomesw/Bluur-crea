import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <img 
              src="https://i.imgur.com/196ODOB.png" 
              alt="Bluur Creator Logo" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="font-medium text-gray-900 font-manrope tracking-tight ml-3">
              <span className="text-2xl font-extrabold">Bluur</span>
              <span className="text-lg font-bold ml-1 tracking-wide text-gray-600">CREATOR</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-10">
              <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center hover:translate-x-0.5">
                How It Works
                <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center hover:translate-x-0.5">
                Track Record
                <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
              <a href="#our-work" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center hover:translate-x-0.5">
                Our Work
                <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
            
            <div className="flex items-center space-x-5">
              <a 
                href="https://wa.me/33628160295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px] font-manrope whitespace-nowrap"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900 p-2 rounded-xl hover:bg-gray-100 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl absolute w-full py-8 px-6 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-t border-gray-100">
          <div className="flex flex-col space-y-6">
            <a 
              href="#how-it-works" 
              className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center"
              onClick={() => setIsOpen(false)}
            >
              How It Works
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Track Record
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="#our-work" 
              className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 font-manrope flex items-center"
              onClick={() => setIsOpen(false)}
            >
              Our Work
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <div className="pt-4 flex flex-col space-y-4">
              <a 
                href="https://wa.me/33628160295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-xl bg-gray-900 text-white font-medium transition-all duration-300 hover:shadow-lg font-manrope flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;