import React, { useEffect, useState } from 'react';
import { Target, TrendingUp, Users, Video, Clock, Zap, Brain, CheckCircle } from 'lucide-react';

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
            Why Bluur?
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-3xl mx-auto">
            We have what others don't — a viral content army built to dominate social feeds 24/7.
          </p>
        </div>

        <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-manrope">1000+ Accounts</h3>
            </div>
            <p className="text-gray-600 font-manrope text-sm leading-relaxed">
              Massive network across multiple niches and regions
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-manrope">30–3000 Videos/Day</h3>
            </div>
            <p className="text-gray-600 font-manrope text-sm leading-relaxed">
              Volume that guarantees viral moments happen
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-manrope">24/7 Distribution</h3>
            </div>
            <p className="text-gray-600 font-manrope text-sm leading-relaxed">
              Non-stop posting for maximum algorithm exposure
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-5 h-5 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-manrope">Trend Templates</h3>
            </div>
            <p className="text-gray-600 font-manrope text-sm leading-relaxed">
              Proven formats optimized for viral performance
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 group border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-manrope">Advanced Viral AI</h3>
            </div>
            <p className="text-gray-600 font-manrope text-sm leading-relaxed">
              Data-driven insights & automation for peak results
            </p>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto text-center bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl p-10 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center">
              <Target className="w-7 h-7 text-violet-600" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 font-manrope">
            This Is Your Army
          </h3>
          <p className="text-lg text-gray-700 font-manrope leading-relaxed mb-6">
            Other agencies don't have this infrastructure.<br/>
            They can't match our speed, scale, or viral hit rate.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-manrope">They don't have your farm</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-manrope">They don't have your speed</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
              <p className="text-gray-700 font-manrope">They can't do what you do</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBluur;
