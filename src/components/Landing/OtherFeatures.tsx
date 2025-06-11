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
import { IconHammer, IconCloudDownload } from '@tabler/icons-react';
import classes from './OtherFeatures.module.css';

const OtherFeatures: React.FC = () => {
  const otherFeatures = [
    { icon: IconHammer, title: 'FILE SMASHER', description: 'Jam selected files into context. Give the AI the full picture.' },
    { icon: IconCloudDownload, title: 'JINA INTEGRATION', description: '(Optional) Slurp markdown from URLs like a digital kraken.' },
  ];

  return (
    <Container size="md" my="xl" className={classes.otherFeaturesContainer}>
      <Title order={3} ta="center" mb="lg" className={classes.otherTitle}>
        Also Cool...
      </Title>
      <List
        spacing="lg"
        size="md"
        center
        className={classes.featureList}
      >
        {otherFeatures.map((feature, index) => (
          <List.Item
            key={index}
            className={classes.featureItem}
            icon={
              <ThemeIcon color="gray" size={30} radius="sm" className={classes.featureIcon}>
                <feature.icon size="1.2rem" />
              </ThemeIcon>
            }
          >
            <Text fw={700} className={classes.featureItemTitle}>{feature.title}</Text>
            <Text size="sm" className={classes.featureItemDesc}>{feature.description}</Text>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default OtherFeatures;
