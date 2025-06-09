import HeroSection from '../components/HeroSection';
import WorkflowOverview from '../components/WorkflowOverview';
import PromptsShowcase from '../components/PromptsShowcase';
import OtherFeatures from '../components/OtherFeatures';
import CTASection from '../components/CTASection';
import ActionIcons from '../components/ActionIcons';

const LandingPage = () => {
  return (
    <>
      <ActionIcons />
      <HeroSection />
      <WorkflowOverview />
      <PromptsShowcase />
      <OtherFeatures />
      <CTASection />
    </>
  );
};

export default LandingPage;
