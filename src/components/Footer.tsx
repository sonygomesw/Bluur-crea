import React from 'react';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 text-gray-600 py-16 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://i.imgur.com/YrtN2BD.png" 
                alt="Bluur Creator Logo" 
                className="h-20 mr-2"
              />
              <div className="ml-1 text-sm font-medium text-gray-500 font-['Inter']">CREATOR</div>
            </div>
            <p className="mb-8 max-w-md text-gray-500 font-['Inter']">
              We help brands go viral on TikTok through authentic creator collaborations and strategic content distribution.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter size={18} />
              </a>
               <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:contact@bluurcreator.com" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium text-sm uppercase tracking-wider mb-6 font-['Inter']">Quick Links</h3>
            <ul className="space-y-4 font-['Inter']">
              <li><a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Track Record</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900 transition-colors">Results</a></li>
              <li><a href="#our-work" className="hover:text-gray-900 transition-colors">Our Work</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-medium text-sm uppercase tracking-wider mb-6 font-['Inter']">Contact</h3>
            <ul className="space-y-4 font-['Inter']">
              <li>contact@bluurcreator.com</li>
              <li>Paris, France</li>
              <li>
                <a 
                  href="https://calendly.com/creatorflowlab/30min-call" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:text-blue-600 transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://i.imgur.com/YrtN2BD.png" 
              alt="Bluur Creator Logo" 
              className="h-12 mr-2"
            />
          </div>
          <p className="text-sm text-gray-500 font-['Inter']">&copy; {currentYear} Bluur Creator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;