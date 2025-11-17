import React from 'react';
import { Mail, ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-white via-gray-50/30 to-white text-gray-600 py-24 border-t border-gray-100">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-100/20 to-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-100/20 to-violet-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-8 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-200/40 via-fuchsia-200/40 to-blue-200/40 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative">
                  <img 
                    src="https://i.imgur.com/196ODOB.png" 
                    alt="Bluur Creator Logo" 
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="ml-3 font-medium text-gray-900 font-manrope tracking-tight">
                <span className="text-2xl font-extrabold">Bluur</span>
                <span className="text-lg font-bold ml-1 tracking-wide text-gray-600">CREATOR</span>
              </div>
            </div>
            <p className="mb-8 max-w-md text-gray-600 font-manrope leading-relaxed">
              We help brands go viral on TikTok through authentic creator collaborations and strategic content distribution.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6 font-manrope">Quick Links</h3>
            <ul className="space-y-4 font-manrope">
              <li>
                <a href="#how-it-works" className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  How It Works
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#pricing" className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  Track Record
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#testimonials" className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  Results
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#our-work" className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  Our Work
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-6 font-manrope">Contact</h3>
            <ul className="space-y-4 font-manrope">
              <li className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2" />
                bluurcreator@gmail.com
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bluur.creator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.threads.net/@bluur.creator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 font-manrope">&copy; {currentYear} Bluur Creator. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-500 font-manrope">
              <a href="#" className="hover:text-gray-900 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;