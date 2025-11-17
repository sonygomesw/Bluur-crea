import React, { useEffect, useState } from 'react';
import { TrendingUp, Music } from 'lucide-react';

const ViralityVolume = () => {
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

    const section = document.getElementById('virality-volume');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const caseStudies = [
    {
      artist: "Sombr",
      track: "Back to Friends",
      videos: "745,000",
      streams: "1,000,000,000+",
      result: "Global viral trend",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50"
    },
    {
      artist: "Hugel",
      track: "I Adore You",
      videos: "109,000",
      streams: "500,000,000",
      result: "International club explosion",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      artist: "Beele",
      track: "La Plena",
      videos: "1,000,000",
      streams: "800,000,000",
      result: "Latin America hit",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      artist: "Benson Boone",
      track: "Beautiful Things",
      videos: "700,000+",
      streams: "1,500,000,000+",
      result: "Billboard #1",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <section id="virality-volume" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center mb-20 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-violet-50 to-violet-100 rounded-2xl mb-6 group hover:scale-110 transition-transform duration-300">
            <TrendingUp className="w-8 h-8 text-violet-600 transform group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            Every Hit Has One Thing in Common:<br/>
            Volume. Massive Volume.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-gray-100 transform ${
                isVisible
                  ? `translate-y-0 opacity-100 delay-${index * 100}`
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className={`w-full h-2 rounded-full bg-gradient-to-r ${study.color} mb-6`}></div>

              <div className="flex items-center mb-4">
                <Music className={`w-6 h-6 mr-3 bg-gradient-to-r ${study.color} text-transparent`} style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-manrope">{study.artist}</h3>
                  <p className="text-gray-600 font-manrope">"{study.track}"</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-manrope">TikTok Videos</span>
                  <span className="text-xl font-bold text-gray-900 font-manrope">{study.videos}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-manrope">Streams</span>
                  <span className="text-xl font-bold text-gray-900 font-manrope">{study.streams}</span>
                </div>
              </div>

              <div className={`bg-gradient-to-r ${study.bgColor} rounded-2xl p-4`}>
                <p className="text-gray-900 font-semibold font-manrope text-center">{study.result}</p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm font-bold text-gray-900 font-manrope">Volume → Inevitable Virality</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViralityVolume;
