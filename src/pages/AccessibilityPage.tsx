import { Container, Title, Text } from '@mantine/core';

const AccessibilityPage = () => (
  <Container size="md" my="xl">
    <Title order={1}>Accessibility</Title>
    <Text mt="md">
      This site should be accessible to everyone. If you run into any issues,
      please send them to{' '}
      <a href="mailto:accessibility@kornelius.dev">accessibility@kornelius.dev</a>.
    </Text>
  </Container>
);

export default AccessibilityPage;
