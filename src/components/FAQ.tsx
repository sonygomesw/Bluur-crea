import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you guarantee millions of views?",
      answer: "We leverage a proven system of content optimization, strategic distribution, and data-driven insights. While we can't guarantee exact numbers, our methodology consistently achieves viral reach through: 1) Multi-platform content distribution, 2) Advanced audience targeting, and 3) Engagement optimization techniques."
    },
    {
      question: "How long before seeing initial results?",
      answer: "Most clients see initial traction within the first 2-4 weeks. Our systematic approach involves rapid testing and optimization, allowing us to identify winning content patterns quickly. We then scale successful strategies for maximum impact."
    },
    {
      question: "What performance guarantees do you offer?",
      answer: "We provide detailed performance tracking and weekly reports. If campaigns don't meet agreed-upon KPIs, we adjust our strategy at no additional cost. Our success is measured by your growth, and we're committed to delivering measurable results."
    },
    {
      question: "How does payment and campaign tracking work?",
      answer: "We offer flexible payment plans with clear deliverables."
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-violet-100/20 to-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-fuchsia-100/20 to-violet-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-violet-50 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-violet-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-manrope leading-tight">
            Frequently Asked<br/>Questions
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our viral growth system
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 group border-2 border-gray-100"
              >
                <span className="text-lg font-semibold text-gray-900 font-manrope text-left">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4">
                  <p className="text-gray-600 font-manrope leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 