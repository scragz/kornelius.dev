/**
 * @description
 * Hero Section component for the Kornelius marketing site.
 * This component displays the main introductory content, including a background,
 * the brand logo, headline, and tagline, styled with a nu metal/Myspace aesthetic.
 *
 * Key features:
 * - Full-width background (image/video placeholder)
 * - Prominent display of the "Bungee" logo (placeholder)
 * - Bold headline and tagline (placeholders)
 * - Optional subtle animations (to be added later)
 *
 * @dependencies
 * - @mantine/core: Uses Mantine components like Container, Title, Text, Box. (Removed Image)
 * - React: Base library for component structure.
 *
 * @notes
 * - Background image/video, logo, headline, and tagline content are placeholders
 *   and should be replaced with actual assets and copy.
 * - Styling needs to be applied (potentially via Mantine theme overrides or CSS modules)
 *   to achieve the desired nu metal/Myspace look.
 * - Added a simple fade-in animation via standard CSS.
 */
// Removed keyframes import from @mantine/core
// Removed unused Image import
import { Container, Title, Text, Box } from '@mantine/core';
import React from 'react'; // Explicit import might be needed depending on setup

// @keyframes rule needs to be defined globally (e.g., in index.css)
/*
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/

// Keyframes for background animation (will be added to index.css)
/*
@keyframes backgroundShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
*/

const HeroSection: React.FC = () => {
  return (
    <Box
      // Animated gradient background + basic structure
      style={{
        minHeight: '80vh', // Adjust height as needed
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', // Needed for overlay/content positioning
        overflow: 'hidden', // Prevent gradient overflow issues
        // Animated Background: Use theme colors or CSS vars
        background: `radial-gradient(ellipse at center, rgba(var(--mantine-color-dark-6 / 0.8)), rgba(var(--mantine-color-dark-9 / 0.9))),
                     linear-gradient(-45deg, var(--keyword-color, #ff7b72), var(--function-color, #d2a8ff), var(--type-color, #79c0ff), var(--string-color, #a5d6ff))`,
        backgroundSize: '200% 200%, 400% 400%', // Larger size for animation
        animation: 'backgroundShift 15s ease infinite', // Reference keyframes
      }}
    >
      {/* Optional: Darker overlay for text readability */}
      {/* <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} /> */}

      {/* Apply animation to the content container */}
      <Container
        size="md"
        // Apply animation using standard CSS properties in the style prop
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          animationName: 'fadeIn', // Reference the keyframe defined globally
          animationDuration: '1s',
          animationTimingFunction: 'ease-out',
          animationFillMode: 'forwards',
        }}
      >
        {/* Placeholder Image removed - Add logo via CSS background or SVG later */}

        {/* Headline */}
        <Title
          order={1}
          // TODO: Apply nu metal/Myspace styling (font, color, size)
          // sx={(theme) => ({
          //   color: theme.colors.accent[5], // Example accent color
          //   fontSize: '3rem', // Example size
          //   marginBottom: theme.spacing.md,
          // })}
        >
          KoЯnelius {/* Using the stylized name */}
        </Title>

        {/* TODO: Add Tagline */}
        <Text
          size="xl"
          // TODO: Apply styling
          // sx={(theme) => ({
          //   color: theme.white, // Example color
          //   marginBottom: theme.spacing.xl,
          // })}
        >
          Streamline AI prompt creation and context management in VS Code.
        </Text>

        {/* Animation is applied to the container above */}
      </Container>
    </Box>
  );
};

export default HeroSection;
