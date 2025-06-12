/**
 * @description
 * Component showcasing AI prompts for the Kornelius extension, grouped by mode.
 * Displays `GitHubPromptCard` components in separate grids for Create, Debug, and Audit modes.
 *
 * Key features:
 * - Groups prompts by Create, Debug, Audit modes.
 * - Renders grids of `GitHubPromptCard` cards linking to prompts.
 * - Includes section titles for each mode.
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, SimpleGrid components.
 * - React: Base library.
 * - ./GitHubPromptCard: Component for individual prompt links.
 *
 * @notes
 * - Styling for the grid layout and titles needs to be applied to match the theme.
 */
import React from 'react';
import { Container, Title, SimpleGrid } from '@mantine/core';
import GitHubPromptCard from '../GitHubPromptCard';
import classes from './PromptsShowcase.module.css';
import { prompts } from '../../data/prompts';
import { Link } from 'react-router-dom';

const createPrompts = prompts.filter(p => p.title.startsWith('Create:'));
const debugPrompts = prompts.filter(p => p.title.startsWith('Debug:'));
const auditPrompts = prompts.filter(p => p.title.startsWith('Audit:'));


const PromptsShowcase: React.FC = () => {
  return (
    // Assign ID for scrolling from Hero CTA
    <Container id="prompts-section" size="lg" my="xl" className={classes.showcaseContainer}>

      {/* Create Mode Section */}
      <Title order={2} ta="center" mb="lg" className={classes.sectionTitle}>
        <Link to="/create">Create Mode</Link>
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mb="xl" className={classes.promptGrid}>
        {createPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            id={prompt.id}
            title={prompt.title.replace('Create: ', '')}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>

      <Title order={2} ta="center" mb="lg" mt="xl" className={classes.sectionTitle}>
        <Link to="/debug">Debug Mode</Link>
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mb="xl" className={classes.promptGrid}>
        {debugPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            id={prompt.id}
            title={prompt.title.replace('Debug: ', '')}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>

      {/* Audit Mode Section */}
      <Title order={2} ta="center" mb="lg" mt="xl" className={classes.sectionTitle}>
        <Link to="/audit">Audit Mode</Link>
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" className={classes.promptGrid}>
        {auditPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            id={prompt.id}
            title={prompt.title.replace('Audit: ', '')}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PromptsShowcase;
