import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you guarantee virality?",
      answer: "We don't guarantee virality—we guarantee volume. Virality happens when enough content is distributed at scale. With 100–100,000 videos posted across 1,000+ accounts, the law of large numbers ensures your track gets maximum exposure, dramatically increasing the chances of a viral breakthrough."
    },
    {
      question: "What makes your system different?",
      answer: "Volume. No other platform can create and distribute 100,000 videos for your track. We've built the infrastructure—1,000+ accounts, trend templates, and AI-powered creation tools—that other agencies simply don't have. This is our moat."
    },
    {
      question: "When do I see results?",
      answer: "Most clients see initial traction within 7-14 days as content floods TikTok. Real momentum builds over 30-60 days as the algorithm picks up on trending patterns and user-generated content begins snowballing organically."
    },
    {
      question: "Do I need to provide videos?",
      answer: "No. Just send us your track link (Spotify, Drive, etc.). We handle everything: content creation, editing, posting, optimization, and reporting. You sit back and watch the numbers grow."
    },
    {
      question: "Is this allowed by TikTok?",
      answer: "Yes. We use real creator accounts, authentic content, and organic distribution. We don't use bots, fake engagement, or spam tactics. Everything is 100% compliant with TikTok's terms of service."
    },
    {
      question: "Can this create Spotify streams?",
      answer: "Absolutely. TikTok videos drive users to search and stream your track on Spotify. Case studies like Sombr (1B streams) and Benson Boone (1.5B+ streams) prove the direct correlation between TikTok volume and streaming success."
    },
    {
      question: "What kind of artists is this for?",
      answer: "Everyone—from emerging artists testing their first release to established acts looking for their next hit. If you have a track that deserves attention, our system works. Volume is the equalizer."
    },
    {
      question: "What is the refund policy?",
      answer: "We don't offer refunds once a campaign starts, as we immediately begin creating and distributing content at scale. However, we're confident in our system—our track record speaks for itself with 2B+ views delivered and artists hitting 10M–1B streams."
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