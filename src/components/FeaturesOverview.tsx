/**
 * @description
 * Component to display key features of the Kornelius extension and legitimacy indicators
 * (e.g., testimonials, partner logos) to build user trust.
 *
 * Key features:
 * - Section for highlighting key features using cards or list items.
 * - Section for legitimacy cues (placeholders for testimonials/logos).
 * - Uses Mantine components for layout and structure.
 * - Applies custom styles via CSS Modules.
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, Text, SimpleGrid, Card.
 * - React: Base library.
 * - ./FeaturesOverview.module.css: Component-specific styles.
 *
 * @notes
 * - All content (testimonials, certifications) is placeholder.
 * - Styling should be applied to match the overall nu metal/Myspace theme.
 */
import React from 'react';
import { Container, Title, Text, SimpleGrid, Card } from '@mantine/core';
import classes from './FeaturesOverview.module.css'; // Import CSS module

const FeaturesOverview: React.FC = () => {
  // Vibey Features
  const features = [
    { title: 'CREATE MODE', description: 'Manifest code outta thin air. REQUEST > SPEC > PLAN > CODE > REVIEW. Boom.' },
    { title: 'DEBUG MODE', description: 'Hunt bugs like a cyber-ninja. OBSERVE > ORIENT > DECIDE > ACT. Repeat.' },
    { title: 'AUDIT MODE', description: 'Scan for weak spots. Security & Accessibility checks on lock.' },
    { title: 'FILE SMASHER', description: 'Jam selected files into context. Give the AI the full picture.' },
    { title: 'JINA INTEGRATION', description: '(Optional) Slurp markdown from URLs like a digital kraken.' },
  ];

  // Placeholder data - replace with actual testimonials or legitimacy indicators
  const legitimacy = [
    { type: 'testimonial', quote: '"Kornelius changed my life!" - Happy Dev', author: 'Dev McDevface' },
    // Removed logo placeholder type
    { type: 'certification', text: 'Certified Awesome by the Council of Cool Coders' },
    { type: 'testimonial', quote: '"It\'s like... woah." - Some Guy', author: 'Guy Incognito' }, // Added another placeholder
  ];

  return (
    <Container size="lg" my="xl" /* TODO: Apply theme styling */>
      {/* Key Features Section */}
      <Title order={2} ta="center" mb="lg" /* TODO: Style title */>
        Whatcha Get
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
        {features.map((feature, index) => (
          // Apply featureCard class
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className={classes.featureCard}>
            {/* Apply featureTitle class */}
            <Text fw={500} mb="xs" className={classes.featureTitle}>{feature.title}</Text>
            {/* Apply featureDescription class */}
            <Text size="sm" c="dimmed" className={classes.featureDescription}>{feature.description}</Text>
          </Card>
        ))}
      </SimpleGrid>

      {/* Legitimacy Indicators Section */}
      <Title order={3} ta="center" mb="lg" /* TODO: Style title */>
        The Hype is Real (Probably)
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        {legitimacy.map((item, index) => (
          // Apply legitimacyCard class
          <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className={classes.legitimacyCard}>
            {item.type === 'testimonial' && (
              <>
                <Text size="sm" style={{ fontStyle: 'italic' }}>{item.quote}</Text>
                <Text size="xs" c="dimmed" ta="right" mt="xs">- {item.author}</Text>
              </>
            )}
            {item.type === 'certification' && (
              <Text size="sm" ta="center">{item.text}</Text>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturesOverview;
