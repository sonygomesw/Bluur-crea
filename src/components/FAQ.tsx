import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does this work?",
      answer: "Simple: You send us your song. We create hundreds or thousands of TikTok videos using your song. We post these videos on our network of 1,000+ TikTok accounts. People see your song, like it, and stream it on Spotify."
    },
    {
      question: "Do I need to make the videos myself?",
      answer: "No! We make all the videos for you. Just send us your song (Spotify link or audio file). We do everything else."
    },
    {
      question: "When will I see results?",
      answer: "Most artists start seeing views and streams within 1-2 weeks. Big results usually happen after 30-60 days when TikTok's algorithm picks up your song."
    },
    {
      question: "Is this safe? Will TikTok ban me?",
      answer: "Yes, it's completely safe. We use real TikTok accounts and real content. No bots, no fake engagement. Everything follows TikTok's rules."
    },
    {
      question: "Will this get me Spotify streams?",
      answer: "Yes! When people see your song on TikTok, they go to Spotify to listen to it. That's how songs like \"Beautiful Things\" by Benson Boone got 1.5 billion streams."
    },
    {
      question: "What if my song doesn't go viral?",
      answer: "Even if you don't go super viral, you'll still get thousands of views and streams. The more videos we make, the more people see your song. That's guaranteed."
    },
    {
      question: "Who is this for?",
      answer: "Any music artist - new or established. If you have a song that deserves to be heard, this works for you."
    },
    {
      question: "Can I get a refund?",
      answer: "We don't offer refunds because we start making videos immediately. But we've helped hundreds of artists get millions of streams, so we're confident it will work for you too."
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
            Common Questions
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Everything explained in simple terms
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