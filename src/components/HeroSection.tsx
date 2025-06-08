/**
 * @description
 * Hero Section component for the Kornelius marketing site.
 * Displays logo, headline, tagline, and a scroll-down CTA.
 * Features animated background and fade-in content animation.
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, Text, Box, Button, Stack.
 * - @tabler/icons-react: For the scroll-down arrow icon.
 * - React: Base library.
 *
 * @notes
 * - Uses global CSS for animations (@keyframes fadeIn, @keyframes backgroundShift).
 * - Logo is an inline SVG placeholder.
 * - Scroll CTA targets the element with id="features-section".
 */
import { Container, Title, Text, Box, Button, Stack } from '@mantine/core';
import React from 'react';
import { IconArrowDown } from '@tabler/icons-react';
import classes from './HeroSection.module.css';
import logoClasses from './shared/Logo.module.css';
import logo from '../assets/images/barbed-wire-color.svg';

const HeroSection: React.FC = () => {

  const handleScrollDown = () => {
    const section = document.getElementById('workflow-overview');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box className={classes.heroBox}>
      <Container size="md" className={classes.heroContainer}>
        <Stack align="center" gap="xl">
          <div className={logoClasses.logoContainer}>
            {/* Barbed Wire Image */}
            <img
              src={logo}
              alt="Barbed Wire Logo"
              className={`${logoClasses.barbedWire} ${classes.barbedWireLogo}`}
            />

            {/* Headline */}
            <Title order={1} className={`${logoClasses.logoText} ${classes.heroTitle}`}>
              KoЯnelius
            </Title>
          </div>

          {/* Tagline */}
          <Text size="xl" className={classes.heroTagline}>
            Your vibe coding companion.
          </Text>

          {/* Scroll Down CTA Button */}
          <Button
            variant="outline" // Different style for scroll button
            color="gray" // TODO: Theme color
            size="lg"
            onClick={handleScrollDown}
            leftSection={<IconArrowDown size={20} />}
            className={classes.scrollButton} // Apply CSS module class
          >
            SEE THE GOODS
          </Button>

        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
