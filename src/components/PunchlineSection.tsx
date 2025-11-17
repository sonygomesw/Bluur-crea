import React, { useEffect, useState } from 'react';
import { Video, Users, Target } from 'lucide-react';

const PunchlineSection = () => {
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

    const section = document.getElementById('punchline');
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
    <section id="punchline" className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`max-w-5xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Main Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 font-manrope leading-tight">
              The Only Platform That Can Produce<br/>
              Up to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">100,000 Videos</span><br/>
              for Your Track.
            </h2>

            <div className="space-y-3 mb-12">
              <p className="text-2xl text-gray-500 font-manrope line-through">No agency.</p>
              <p className="text-2xl text-gray-500 font-manrope line-through">No label.</p>
              <p className="text-2xl text-gray-500 font-manrope line-through">No playlist.</p>
              <p className="text-2xl text-gray-500 font-manrope line-through">No influencer.</p>
            </div>

            <p className="text-3xl md:text-4xl font-bold text-gray-900 font-manrope mb-4">
              Nothing scales virality like volume.
            </p>
          </div>

          {/* 3 Bullet Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-manrope mb-2">100–100,000</h3>
              <p className="text-gray-600 font-manrope">videos generated</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-manrope mb-2">1,000+ accounts</h3>
              <p className="text-gray-600 font-manrope">posting 24/7</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-gray-100 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-manrope mb-2">150+ templates</h3>
              <p className="text-gray-600 font-manrope">optimized for TikTok's algorithm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PunchlineSection;
