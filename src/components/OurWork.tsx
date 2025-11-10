import React from 'react';
import { Award, ArrowRight } from 'lucide-react';

const CaseStudy = ({ brand, category, stats, image, color, achievements }) => {
  return (
    <div className="mb-20 group">
      <div className="rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] transition-all duration-500 hover:scale-[1.02] bg-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-8">
            <div className="h-72 overflow-hidden flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100">
              <img 
                src={image} 
                alt={`${brand} case study`} 
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex flex-col gap-3 mb-6">
              <div className="inline-flex items-center justify-center bg-white shadow-sm border-2 border-gray-100 px-6 py-3 rounded-2xl">
                <span className="text-blue-700 text-base font-semibold">{stats.views}</span>
              </div>
              <div className="inline-flex items-center justify-center bg-white shadow-sm border-2 border-gray-100 px-6 py-3 rounded-2xl">
                <span className="text-fuchsia-700 text-base font-semibold">{stats.videos}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-manrope flex items-center gap-3 mb-4">
              {brand}
              <span className="inline-flex items-center justify-center bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full">
                Verified ✓
              </span>
            </h3>
            <p className="text-gray-600 font-manrope text-lg leading-relaxed mb-6">{category}</p>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600 font-manrope">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWork = () => {
  const caseStudies = [
    {
      brand: "Drake",
      category: "Viral Campaign with PartyNextDoor",
      image: "https://ca.billboard.com/media-library/drake-partynextdoor-ome-exy-ongs-4-u-album-art.jpg?id=56491083&width=1200&height=800&quality=90&coordinates=0%2C123%2C0%2C237",
      color: "from-[#c7d2fe] to-[#818cf8]",
      stats: {
        views: "450M+ views in 30 days",
        videos: "15,000+ videos published"
      },
      achievements: [
        "Leveraging our viral strategy, we contributed to massive Billboard success",
        "300% increase in content engagement",
        "8.5M+ new social media reach"
      ]
    },
    {
      brand: "Mr Beast",
      category: "Content Strategy Analysis",
      image: "https://assets.aboutamazon.com/85/f1/3d049a30431fb3d91b11b3f3610a/hero001-aa-mar2024-mrbeastpv-hero-2000x1125.jpg",
      color: "from-[#bfdbfe] to-[#93c5fd]",
      stats: {
        views: "700M+ views",
        videos: "35,000+ videos published"
      },
      achievements: [
        "Applied similar strategies to achieve 2.5M subscriber growth",
        "45% increase in engagement metrics",
        "Record-breaking view counts across platforms"
      ]
    },
    {
      brand: "Kai Cenat",
      category: "Platform Growth Strategy",
      image: "https://static.android.com.pl/uploads/2023/02/Kai-Cenat-1280x720.jpg",
      color: "from-[#ddd6fe] to-[#a78bfa]",
      stats: {
        views: "280M+ views",
        videos: "20,000+ videos published"
      },
      achievements: [
        "Implemented strategies leading to top streamer status",
        "400% increase in content performance",
        "Multiple successful brand collaborations"
      ]
    }
  ];

  return (
    <section id="our-work" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-manrope leading-tight">
            Results That Matter
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            From Views → To Streams → To Income
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6">
              <p className="text-3xl font-bold text-gray-900 font-manrope mb-2">🔥 Artists</p>
              <p className="text-gray-700 font-manrope">10M+ views = 1M+ Spotify streams</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
              <p className="text-3xl font-bold text-gray-900 font-manrope mb-2">🔥 Creators</p>
              <p className="text-gray-700 font-manrope">3M+ views = 20+ new clients</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <p className="text-3xl font-bold text-gray-900 font-manrope mb-2">🔥 Brands</p>
              <p className="text-gray-700 font-manrope">700K views = products sold out in 48h</p>
            </div>
          </div>
          <p className="text-base text-gray-600 font-manrope mt-8 max-w-2xl mx-auto">
            ✅ Over 2 Billion total organic views<br/>
            ✅ 500+ campaigns delivered<br/>
            ✅ Millions in real-world results
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-manrope max-w-2xl mx-auto">
            *Results based on comprehensive analysis of public data and implementation of similar viral strategies.
            These case studies demonstrate the potential impact of our proven methodologies.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const pricingSection = document.getElementById('pricing');
              pricingSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 inline-flex items-center font-manrope relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">See Our Plans</span>
            <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;