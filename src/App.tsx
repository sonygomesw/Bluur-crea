import React from 'react';
import { Calendar, ArrowRight, CheckCircle, Star } from 'lucide-react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import OurWork from './components/OurWork';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-manrope">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <PricingSection />
        <OurWork />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;