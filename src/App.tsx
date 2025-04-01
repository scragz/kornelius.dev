// Removed useState, logos, and default App.css import.
// Keep './App.css' import below if you add global styles specific to App later.
import { Box, Group, ActionIcon, Anchor, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from './App.module.css'; // Import App-specific styles
// Keep './App.css' import below if you add global styles specific to App later.
// import './App.css'
import HeroSection from './components/HeroSection'; // Import the HeroSection
import PromptsShowcase from './components/PromptsShowcase'; // Import the combined showcase
// Removed FeaturesOverview import
import OtherFeatures from './components/OtherFeatures'; // Import the new OtherFeatures component
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
 * - PromptsShowcase: Section displaying prompt links grouped by mode.
 * - OtherFeatures: Section for miscellaneous features.
 * - CTASection: The final call-to-action section.
 *
 * @notes
 * - This component renders the main sections of the single-page application.
 */
function App() {
  // TODO: Replace with actual VS Code Marketplace URL
  const marketplaceUrl = "https://marketplace.visualstudio.com/items?itemName=scragz.kornelius";
  const githubUrl = "https://github.com/scragz/kornelius";

  // The main structure will likely involve a top-level fragment or a Mantine Layout component
  // to hold all the page sections.
  return (
    <>
      {/* Fixed Icons Top Right */}
      <Box className={classes.fixedIcons}>
        <Group gap="sm">
          <Tooltip label="View on GitHub" withArrow position="bottom-end">
            <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
                <IconBrandGithub size={28} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
          <Tooltip label="Get Extension" withArrow position="bottom-end">
            <Anchor href={marketplaceUrl} target="_blank" rel="noopener noreferrer">
              <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
                <IconDownload size={28} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
        </Group>
      </Box>

      <HeroSection />
      <PromptsShowcase /> {/* Render the grouped prompts section */}
      <OtherFeatures /> {/* Render the miscellaneous features section */}
      <CTASection /> {/* Render the CTASection */}
      {/* Other sections will be added here later: */}
    </>
  );
}

export default App;
