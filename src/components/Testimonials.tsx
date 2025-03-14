import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our campaign went viral on TikTok with 15M+ views in one week. Way better than ads.",
      author: "Sarah Johnson",
      position: "CEO, FashionTech",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-blue-200 to-blue-100"
    },
    {
      quote: "CreatorFlowLab delivered 3x the views we expected. The organic reach was incredible.",
      author: "Michael Chen",
      position: "Marketing Director, GameVerse",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-orange-200 to-orange-100"
    },
    {
      quote: "The ROI was phenomenal. We saw a 200% increase in sales during our viral campaign.",
      author: "Emma Rodriguez",
      position: "Founder, BeautyBlend",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      color: "from-pink-200 to-pink-100"
    }
  ];

  const stats = [
    { value: "50M+", label: "Total Views Generated" },
    { value: "100+", label: "Brands Helped" },
    { value: "500+", label: "Creators Network" }
  ];

  return (
    <section id="testimonials" className="py-32 bg-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-left mb-16 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-['Inter']">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 font-['Inter']">
            Success stories from brands that have worked with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-500 h-[400px] relative`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${testimonial.color} w-full h-full`}></div>
              <div className="relative p-8 flex flex-col h-full">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-8 italic text-lg flex-grow font-['Inter']">"{testimonial.quote}"</p>
                
                <div className="flex items-center mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-white/50"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 font-['Inter']">{testimonial.author}</h4>
                    <p className="text-gray-700 text-sm font-['Inter']">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center rounded-3xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-64">
              <div className="text-4xl font-bold text-gray-900 mb-2 font-['Inter']">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider font-['Inter']">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;