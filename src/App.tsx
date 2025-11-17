import React from 'react';
import HeroSection from './components/HeroSection';
import ViralityVolume from './components/ViralityVolume';
import PunchlineSection from './components/PunchlineSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import ResultsSection from './components/ResultsSection';
import WhyBluur from './components/WhyBluur';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-manrope">
      <Navbar />
      <main>
        <HeroSection />
        <ViralityVolume />
        <PunchlineSection />
        <HowItWorks />
        <PricingSection />
        <ResultsSection />
        <WhyBluur />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;