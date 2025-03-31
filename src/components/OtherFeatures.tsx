/**
 * @description
 * Component to display miscellaneous features of the Kornelius extension.
 *
 * Key features:
 * - Lists additional features like File Concatenation and Jina Integration.
 * - Uses simple Mantine components (List, ThemeIcon).
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, Text, List, ThemeIcon.
 * - @tabler/icons-react: For list icons.
 * - React: Base library.
 *
 * @notes
 * - This section is styled minimally to differentiate it from prompt/feature cards.
 */
import React from 'react';
import { Container, Title, Text, List, ThemeIcon } from '@mantine/core';
import { IconHammer, IconCloudDownload } from '@tabler/icons-react'; // Example icons

const OtherFeatures: React.FC = () => {
  const otherFeatures = [
    { icon: IconHammer, title: 'FILE SMASHER', description: 'Jam selected files into context. Give the AI the full picture.' },
    { icon: IconCloudDownload, title: 'JINA INTEGRATION', description: '(Optional) Slurp markdown from URLs like a digital kraken.' },
  ];

  return (
    <Container size="md" my="xl">
      <Title order={3} ta="center" mb="lg" /* TODO: Style title */>
        Also Cool...
      </Title>
      <List
        spacing="md"
        size="sm"
        center
        icon={
          <ThemeIcon color="dimmed" size={24} radius="xl">
            {/* Default icon if specific one isn't needed */}
          </ThemeIcon>
        }
      >
        {otherFeatures.map((feature, index) => (
          <List.Item
            key={index}
            icon={
              <ThemeIcon color="blue" size={24} radius="xl"> {/* TODO: Theme color */}
                <feature.icon size="1rem" />
              </ThemeIcon>
            }
          >
            <Text fw={500}>{feature.title}</Text>
            <Text size="sm" c="dimmed">{feature.description}</Text>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default OtherFeatures;
