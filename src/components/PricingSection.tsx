import React, { useEffect, useState } from 'react';
import { Check, ArrowRight, Rocket, Zap, Target, Crown } from 'lucide-react';

const PricingSection = () => {
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

    const section = document.getElementById('pricing');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Launch',
      description: 'Starter campaign for creators & artists',
      videos: '300 videos',
      price: '$400',
      priceLabel: 'per campaign',
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100',
      buttonText: 'Start Now',
      paymentLink: 'https://buy.stripe.com/00w8wOfy54Zz0in7z1gUM09',
      delay: 'delay-0',
      popular: false
    },
    {
      name: 'Growth',
      description: 'Consistent viral growth',
      videos: '900 videos',
      price: '$900',
      priceLabel: 'per campaign',
      icon: <Zap className="w-6 h-6 text-violet-600" />,
      color: 'from-violet-50 to-violet-100',
      buttonText: 'Start Now',
      paymentLink: 'https://buy.stripe.com/14A14m99Hdw5fdhaLdgUM0a',
      delay: 'delay-100',
      popular: true
    },
    {
      name: 'Domination',
      description: 'Scale like top creators',
      videos: '3,000 videos',
      price: '$3,000',
      priceLabel: 'per campaign',
      icon: <Target className="w-6 h-6 text-fuchsia-600" />,
      color: 'from-fuchsia-50 to-fuchsia-100',
      buttonText: 'Start Now',
      paymentLink: 'https://buy.stripe.com/fZu6oGeu1dw55CH8D5gUM0b',
      delay: 'delay-200',
      popular: false
    },
    {
      name: 'Supreme',
      description: 'Enterprise / label-level',
      videos: '10,000 videos',
      price: '$10,000',
      priceLabel: 'per campaign',
      icon: <Crown className="w-6 h-6 text-gray-900" />,
      color: 'from-gray-50 to-gray-100',
      buttonText: 'Start Now',
      paymentLink: 'https://buy.stripe.com/7sY8wO71zfEd9SXf1tgUM0c',
      delay: 'delay-300',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-white"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className={`text-center mb-20 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 font-manrope leading-tight">
            Start Your Viral Campaign
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Choose your growth level. We handle everything — from content to posting.<br/>
            <span className="text-gray-900 font-semibold">No contracts. Cancel anytime.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden bg-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 group transform relative ${
                isVisible
                  ? `translate-y-0 opacity-100 ${plan.delay}`
                  : 'translate-y-10 opacity-0'
              } ${plan.popular ? 'border-2 border-violet-200 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                  POPULAR
                </div>
              )}

              <div className="p-8 relative">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.color} group-hover:scale-110 transition-transform duration-300`}>
                      {plan.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 font-manrope text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="text-gray-600 mb-4 font-manrope text-sm leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-3xl font-bold text-gray-900 font-manrope mb-1">
                      {plan.price}
                    </p>
                    <p className="text-sm text-gray-500 font-manrope">
                      {plan.videos} / campaign
                    </p>
                  </div>

                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      plan.popular
                        ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:translate-y-[-2px]'
                        : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg hover:translate-y-[-2px]'
                    }`}
                  >
                    <span className="font-manrope">{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`max-w-4xl mx-auto space-y-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 font-manrope">
                  All campaigns include full content distribution, optimization, and weekly reporting.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-gray-700 font-manrope">
                  We only work with 50 clients at a time to maintain quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
