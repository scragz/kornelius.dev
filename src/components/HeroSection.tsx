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

const HeroSection: React.FC = () => {

  const handleScrollDown = () => {
    // Target the ID of the PromptsShowcase container
    const promptsSection = document.getElementById('prompts-section');
    if (promptsSection) {
      promptsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box className={classes.heroBox}>
      <Container size="md" className={classes.heroContainer}>
        <Stack align="center" gap="xl">
          <svg width="280" height="210" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.heroLogoSvg}>
            <path d="M30 20 H 170 V 130 H 30 Z" fill="url(#logoGradient)" stroke="var(--keyword-color, #ff7b72)" strokeWidth="3" transform="skewX(-5) rotate(-3)" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="60" fill="var(--type-color, #79c0ff)" transform="rotate(-5 100 75)">K!</text>
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'var(--function-color, #d2a8ff)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'var(--keyword-color, #ff7b72)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>

          {/* Headline */}
          <Title order={1} className={classes.heroTitle}>
            KoЯnelius
          </Title>

          {/* Tagline */}
          <Text size="xl" className={classes.heroTagline}>
            Streamline AI prompt creation and context management in VS Code.
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
