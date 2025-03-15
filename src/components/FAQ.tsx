import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you guarantee millions of views?",
      answer: "We use a strategic content flood approach, publishing thousands of videos that force the algorithm to push your content. It's not luck, it's a formula."
    },
    {
      question: "How long before seeing initial results?",
      answer: "Our system is built for speed, once the content wave is launched, the engagement snowballs, pushing your brand in front of millions. The real growth compounds over weeks as the algorithm continues to amplify reach."
    },
    {
      question: "What performance guarantees do you offer?",
      answer: "We guarantee visibility. Every campaign includes a minimum benchmark of organic views. For high-tier packages, we provide performance tracking and real-time optimizations to ensure the best possible reach. Our track record speaks for itself—2B+ views generated, 100+ brands scaled."
    },
    {
      question: "How does payment and campaign tracking work?",
      answer: "Payments are upfront and secure. We accept multiple payment methods, including wire transfers and crypto for high-volume transactions. Every campaign comes with a real-time performance dashboard where you can track views, engagement, and campaign progress in real-time."
    },
    {
      question: "Who creates the content? Do we need to provide videos?",
      answer: "You don't have to lift a finger. We handle everything—from content creation to distribution. If you already have high-performing assets, we can repurpose them for maximum impact. Otherwise, our team produces viral-optimized content based on proven engagement triggers."
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