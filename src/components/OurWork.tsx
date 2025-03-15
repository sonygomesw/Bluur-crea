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
            Exceptional Results<br/>from Our Clients
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Discover how we've transformed the online presence of top creators
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
      </div>
    </section>
  );
};

export default OurWork;