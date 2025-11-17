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
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 font-manrope leading-tight">
            Ready to Make Your Song<br/>
            Go Viral?
          </h2>
          <p className="text-xl text-gray-600 font-manrope mb-8">
            Join thousands of artists who've already blown up on TikTok
          </p>

          <div className="flex flex-col items-center justify-center gap-6 mb-8">
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center px-12 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group relative overflow-hidden text-lg font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 font-manrope">Get Started Now</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>
          </div>

          <p className="text-gray-500 text-base font-manrope">
            No commitment required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;