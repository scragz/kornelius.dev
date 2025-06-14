import HeroSection from '../components/Landing/HeroSection';
import WorkflowOverview from '../components/Landing/WorkflowOverview';
import PromptsShowcase from '../components/Landing/PromptsShowcase';
import OtherFeatures from '../components/Landing/OtherFeatures';
import CTASection from '../components/Landing/CTASection';
import ActionIcons from '../components/ActionIcons';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <ActionIcons />
      <HeroSection />
      <WorkflowOverview />
      <PromptsShowcase />
      <OtherFeatures />
      <CTASection />
      <Footer />
    </>
  );
};

export default LandingPage;
