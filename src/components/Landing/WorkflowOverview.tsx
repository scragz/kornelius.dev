import React from 'react';
import { Container, Title, Text } from '@mantine/core'; // Removed Image, Box
import classes from './WorkflowOverview.module.css';

const WorkflowOverview: React.FC = () => {
  return (
    <Container id="workflow-overview" size="lg" my="xl" className={classes.overallWorkflowContainer}>
      <Title order={3} ta="center" mb="md" className={classes.overallTitle}>
        The Grand Scheme
      </Title>
      <Text ta="center" mb="xl" className={classes.overallDescription}>
        Kornelius streamlines your AI-assisted coding with helpful prompts broken down into distinct modes for creating, debugging, and final audits. Just add the context for the chosen prompt, copy to clipboard, and let the AI rip. It's like having a tiny, code-slinging demon sidekick.
      </Text>
    </Container>
  );
};

export default WorkflowOverview;
