import { Container, Title, Text } from '@mantine/core';

const PrivacyPage = () => (
  <Container size="md" my="xl">
    <Title order={1}>Privacy Policy</Title>
    <Text mt="md">
      This site does not collect personal data. Visit the GitHub repository for
      more information about the project.
    </Text>
  </Container>
);

export default PrivacyPage;
