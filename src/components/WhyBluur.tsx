import React, { useEffect, useState } from 'react';
import { Target, TrendingUp } from 'lucide-react';

const WhyBluur = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-bluur');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="why-bluur" className="py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center mb-16 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <Target className="w-8 h-8 text-violet-600 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            We Turn Virality Into<br/>Real-World Results
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-3xl mx-auto">
            Most agencies sell you content.<br/>
            We sell you <span className="font-semibold text-gray-900">momentum</span> — the kind that multiplies your reach, income, and opportunities.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 font-manrope">For Artists</h3>
            <p className="text-gray-600 font-manrope leading-relaxed">
              Who want their track to blow up and turn into Spotify streams & bookings.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 font-manrope">For Creators</h3>
            <p className="text-gray-600 font-manrope leading-relaxed">
              Who want to explode their reach and attract high-paying clients.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 font-manrope">For Brands</h3>
            <p className="text-gray-600 font-manrope leading-relaxed">
              Who want to dominate feeds and convert attention into sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBluur;
