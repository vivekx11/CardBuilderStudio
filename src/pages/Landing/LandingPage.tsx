import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import FeaturesSection from './sections/FeaturesSection';
import IndustriesSection from './sections/IndustriesSection';
import PricingSection from './sections/PricingSection';
import CTASection from './sections/CTASection';

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <IndustriesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
