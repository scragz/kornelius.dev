/**
 * @description
 * Call-to-Action (CTA) section component for the Kornelius marketing site.
 * This component encourages users to download or install the VS Code extension.
 *
 * Key features:
 * - Prominent headline and descriptive text.
 * - A clear call-to-action button (e.g., "Download Now" or "Install Extension").
 * - Centered layout using Mantine components.
 * - Placeholders for hover/click animations (to be added later).
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, Text, Button, Group components.
 * - React: Base library.
 *
 * @notes
 * - The button's link (`href`) or `onClick` handler needs to be set to the actual
 *   VS Code Marketplace URL or installation trigger.
 * - Styling needs to be applied to the container, text, and button to make it
 *   visually appealing and consistent with the nu metal/Myspace theme.
 * - Animations will be implemented in a later step (Step 9).
 * - Consider adding analytics tracking to the button click (Step 11).
 */
import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';

const CTASection: React.FC = () => {
  return (
    <Container size="md" my="xl" py="xl" /* TODO: Apply theme styling, maybe background */>
      <Group justify="center">
        <div style={{ textAlign: 'center' }}>
          {/* Vibey Headline */}
          <Title order={2} mb="md" /* TODO: Style title */>
            ENOUGH TALK. LET'S SHRED.
          </Title>

          {/* Vibey Descriptive Text */}
          <Text size="lg" c="dimmed" mb="xl" /* TODO: Style text */>
            Stop dreamin', start schemin'. Grab Kornelius for VS Code and unleash your inner prompt demon.
          </Text>

          {/* Vibey Download/Install Button */}
          {/* TODO: Add hover/click animations later */}
          {/* TODO: Add analytics tracking later */}
          <Button
            size="xl" // Make the button prominent
            // TODO: Add link to VS Code Marketplace or installation trigger
            // component="a"
            // href="https://marketplace.visualstudio.com/items?itemName=YourPublisher.Kornelius"
            // target="_blank"
            // rel="noopener noreferrer"
            // TODO: Apply nu metal/Myspace styling (color, variant, radius)
            // variant="gradient"
            // gradient={{ from: 'pink', to: 'yellow' }}
          >
            GET KORNELIUS NOW!
          </Button>
        </div>
      </Group>
    </Container>
  );
};

export default CTASection;
