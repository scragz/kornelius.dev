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

const HeroSection: React.FC = () => {

  const handleScrollDown = () => {
    // Target the ID of the PromptsShowcase container
    const promptsSection = document.getElementById('prompts-section');
    if (promptsSection) {
      promptsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      // Animated gradient background + basic structure
      style={{
        minHeight: '100vh', // Make hero take full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '5vh', // Add some padding top/bottom
        paddingBottom: '5vh',
        // Animated Background
        background: `radial-gradient(ellipse at center, rgba(var(--mantine-color-dark-6 / 0.8)), rgba(var(--mantine-color-dark-9 / 0.9))),
                     linear-gradient(-45deg, var(--keyword-color, #ff7b72), var(--function-color, #d2a8ff), var(--type-color, #79c0ff), var(--string-color, #a5d6ff))`,
        backgroundSize: '200% 200%, 400% 400%',
        animation: 'backgroundShift 15s ease infinite',
      }}
    >
      {/* Apply fade-in animation to the content container */}
      <Container
        size="md"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          animationName: 'fadeIn',
          animationDuration: '1s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'forwards',
        }}
      >
        <Stack align="center" gap="xl"> {/* Use Stack for vertical layout */}

          {/* Larger, Animated SVG Logo Placeholder */}
          {/* TODO: Replace with actual logo SVG */}
          <svg width="280" height="210" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg"
               style={{
                 filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
                 animation: 'pulseGlow 4s infinite alternate ease-in-out' // Add pulsating glow animation
               }}>
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
          <Title order={1}>
            KoЯnelius
          </Title>

          {/* Tagline */}
          <Text size="xl">
            Streamline AI prompt creation and context management in VS Code.
          </Text>

          {/* Scroll Down CTA Button */}
          <Button
            variant="outline" // Different style for scroll button
            color="gray" // TODO: Theme color
            size="lg"
            onClick={handleScrollDown}
            leftSection={<IconArrowDown size={20} />}
            // Add cool hover effect using Mantine's styles prop or inline styles for simplicity here
            styles={{
              root: {
                marginTop: '2rem',
                borderColor: 'var(--comment-color, #8b949e)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease', // Add transitions
                '&:hover': {
                  transform: 'scale(1.1)',
                  borderColor: 'var(--type-color, #79c0ff)',
                  boxShadow: '0 0 15px var(--type-color, #79c0ff)',
                },
              },
            }}
          >
            SEE THE GOODS
          </Button>

        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
