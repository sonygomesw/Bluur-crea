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
      name: 'Starter',
      videos: '100 Videos',
      price: '199€',
      description: '',
      icon: <Rocket className="w-6 h-6 text-blue-600" />,
      color: 'from-blue-50 to-blue-100',
      buttonText: 'Get Started',
      paymentLink: '#',
      delay: 'delay-0',
      popular: false
    },
    {
      name: 'Growth',
      videos: '300 Videos',
      price: '499€',
      description: '',
      icon: <Zap className="w-6 h-6 text-violet-600" />,
      color: 'from-violet-50 to-violet-100',
      buttonText: 'Get Started',
      paymentLink: '#',
      delay: 'delay-100',
      popular: false
    },
    {
      name: 'Viral',
      videos: '500 Videos',
      price: '999€',
      description: 'Most Popular',
      icon: <Target className="w-6 h-6 text-green-600" />,
      color: 'from-green-50 to-green-100',
      buttonText: 'Get Started',
      paymentLink: '#',
      delay: 'delay-200',
      popular: true
    },
    {
      name: 'Domination',
      videos: '1,500 Videos',
      price: '2,490€',
      description: '',
      icon: <Crown className="w-6 h-6 text-fuchsia-600" />,
      color: 'from-fuchsia-50 to-fuchsia-100',
      buttonText: 'Get Started',
      paymentLink: '#',
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
            Pick Your Package
          </h2>
          <p className="text-xl text-gray-600 font-manrope leading-relaxed max-w-2xl mx-auto">
            Choose how many videos you want.<br/>
            More videos = more exposure = more streams.
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

                <div className="relative text-center">
                  <h3 className="text-2xl font-bold mb-3 font-manrope text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="text-4xl font-bold text-gray-900 font-manrope mb-2">
                    {plan.price}
                  </p>

                  <p className="text-lg text-gray-600 font-manrope mb-6">
                    {plan.videos}
                  </p>

                  {plan.description && (
                    <div className="mb-6 p-3 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                      <p className="text-sm font-semibold text-orange-700 font-manrope">
                        🔥 {plan.description}
                      </p>
                    </div>
                  )}

                  <div className="space-y-2 mb-6 text-left text-sm text-gray-600 font-manrope">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Distribution 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Full reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Trend optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>No contract</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Cancel anytime</span>
                    </div>
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

        {/* Custom Plan Section */}
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-manrope mb-4">
              Ultra — 10,000+ Videos
            </h3>
            <p className="text-lg text-gray-600 font-manrope mb-6">
              On Request
            </p>
            <a
              href="mailto:bluurcreator@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group"
            >
              <span className="font-manrope">Contact Us</span>
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
