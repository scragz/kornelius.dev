// Removed useState, logos, and default App.css import.
// Keep './App.css' import below if you add global styles specific to App later.
// import './App.css'
import HeroSection from './components/HeroSection'; // Import the HeroSection
import PromptsShowcase from './components/PromptsShowcase'; // Import the PromptsShowcase
import FeaturesOverview from './components/FeaturesOverview'; // Import the FeaturesOverview
import CTASection from './components/CTASection'; // Import the CTASection

/**
 * @description
 * Main application component for the Kornelius marketing site.
 * It sets up the main layout and renders the different sections of the page.
 * Currently, it only renders the HeroSection. Other sections will be added sequentially.
 *
 * @dependencies
 * - React: Base library.
 * - HeroSection: The first content section of the page.
 * - PromptsShowcase: The section displaying copyable prompts.
 * - FeaturesOverview: Section highlighting features and legitimacy.
 * - CTASection: The final call-to-action section.
 *
 * @notes
 * - This component renders the main sections of the single-page application.
 */
function App() {
  // The main structure will likely involve a top-level fragment or a Mantine Layout component
  // to hold all the page sections.
  return (
    <>
      <HeroSection />
      <PromptsShowcase /> {/* Render the PromptsShowcase section */}
      <FeaturesOverview /> {/* Render the FeaturesOverview section */}
      <CTASection /> {/* Render the CTASection */}
      {/* Other sections will be added here later: */}
    </>
  );
}

export default App;
