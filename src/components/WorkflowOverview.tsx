import React from 'react';
import { Container, Title, Text } from '@mantine/core'; // Removed Image, Box
import classes from './WorkflowOverview.module.css';
import Diagram from './Diagram'; // Import the new Diagram component

// Import only the overall workflow image
import korneliusWorkflow from '../assets/images/kornelius-workflow.png';


const WorkflowOverview: React.FC = () => {
  return (
    // Use a different container class for this specific section
    <Container id="workflow-overview" size="lg" my="xl" className={classes.overallWorkflowContainer}>
      <Title order={3} ta="center" mb="md" className={classes.overallTitle}>
        The Grand Scheme
      </Title>
      <Text ta="center" mb="xl" className={classes.overallDescription}>
        Kornelius streamlines your AI-assisted coding with distinct modes. Select code, pick a mode (Create, Debug, Audit), choose a prompt, and let the AI rip. It's like having a tiny, code-slinging demon sidekick. Peep the master plan below.
      </Text>
      {/* Use the Diagram component */}
      <Diagram
        src={korneliusWorkflow}
        alt="Overall Kornelius Workflow Diagram"
      />
    </Container>
  );
};

export default WorkflowOverview;
