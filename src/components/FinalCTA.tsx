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
            You Don't Need Luck.<br/>You Need Distribution.
          </h2>

          <p className="text-xl text-gray-600 font-manrope leading-relaxed mb-8 max-w-2xl mx-auto">
            We turn your sound, your content, or your brand into a viral wave.
          </p>

          <div className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-left flex-1">
              <p className="text-base font-semibold text-gray-900 font-manrope mb-1">Artists</p>
              <p className="text-sm text-gray-600 font-manrope">Get streams, followers, bookings & label deals</p>
            </div>

            <div className="text-left flex-1">
              <p className="text-base font-semibold text-gray-900 font-manrope mb-1">Creators</p>
              <p className="text-sm text-gray-600 font-manrope">Get clients, sales & collaborations</p>
            </div>

            <div className="text-left flex-1">
              <p className="text-base font-semibold text-gray-900 font-manrope mb-1">Brands</p>
              <p className="text-sm text-gray-600 font-manrope">Get sales, traffic & recognition</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-2xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="font-medium relative z-10">Start Your Campaign</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>
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