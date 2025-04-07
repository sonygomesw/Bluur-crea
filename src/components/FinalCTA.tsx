import React from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 font-manrope leading-tight">
            Ready to Scale Your<br/>Brand Together?
          </h2>
          
          <p className="text-xl text-gray-600 font-manrope leading-relaxed mb-12 max-w-2xl mx-auto">
            Join hundreds of successful creators who have transformed their online presence with our proven system
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="mailto:bluurcreator@gmail.com" 
              className="flex items-center px-8 py-4 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5 mr-3" />
              <span className="font-medium">bluurcreator@gmail.com</span>
            </a>
            
            <a 
              href="https://wa.me/33749595492" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              <span className="font-medium">Let's Talk</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          <div className="flex items-center justify-center text-gray-500 text-sm font-manrope">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              No commitment required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;