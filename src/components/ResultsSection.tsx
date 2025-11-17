import React, { useEffect, useState } from 'react';
import { TrendingUp, Eye, Music2, Award } from 'lucide-react';

const ResultsSection = () => {
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

    const section = document.getElementById('results');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const metrics = [
    { value: "2B+", label: "Organic Views Delivered", icon: <Eye className="w-6 h-6" /> },
    { value: "500+", label: "Campaigns", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "10M-1B", label: "Streams per Artist", icon: <Music2 className="w-6 h-6" /> },
    { value: "700k-1M", label: "Videos for Hit Songs", icon: <Award className="w-6 h-6" /> }
  ];

  const caseStudies = [
    {
      artist: "Sombr",
      videos: "745k videos",
      result: "1B streams",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      artist: "Hugel",
      videos: "109k videos",
      result: "500M streams",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      artist: "Beele",
      videos: "1M videos",
      result: "800M streams",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      artist: "Benson Boone",
      videos: "700k videos",
      result: "#1 Billboard + 1.5B streams",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="results" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <div className={`text-center mb-20 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            From TikTok Videos → To Streams → To Hits
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 border border-gray-100 group transform ${
                isVisible
                  ? `translate-y-0 opacity-100 delay-${index * 100}`
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-100 to-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 text-violet-600">
                {metric.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900 font-manrope mb-2">{metric.value}</p>
              <p className="text-gray-600 font-manrope text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 border border-gray-100 transform ${
                isVisible
                  ? `translate-y-0 opacity-100 delay-${(index + 4) * 100}`
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${study.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 font-manrope mb-3">{study.artist}</h3>
                <p className="text-gray-600 font-manrope mb-2">{study.videos} →</p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${study.gradient} font-manrope">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
