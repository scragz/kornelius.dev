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
import GitHubPromptCard from './GitHubPromptCard'; // Import the prompt card component

// Base URLs for GitHub view and raw content
const GITHUB_VIEW_BASE_URL = 'https://github.com/scragz/kornelius/blob/main/prompts';
const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/scragz/kornelius/main/prompts';

// Data for prompts including both view and raw URLs
const allPrompts = [
  // Create Mode
  { id: 'create-req', title: 'Create: Request', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/request.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/request.prompt`, description: 'Define the initial request for code generation.' },
  { id: 'create-spec', title: 'Create: Spec', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/spec.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/spec.prompt`, description: 'Generate a technical specification from a request.' },
  { id: 'create-plan', title: 'Create: Planner', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/planner.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/planner.prompt`, description: 'Create an implementation plan based on a spec.' },
  { id: 'create-code', title: 'Create: Codegen', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/codegen.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/codegen.prompt`, description: 'Generate code based on a plan and spec.' },
  { id: 'create-rev', title: 'Create: Review', viewUrl: `${GITHUB_VIEW_BASE_URL}/create/review.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/create/review.prompt`, description: 'Review generated code for improvements.' },
  // Debug Mode
  { id: 'debug-obs', title: 'Debug: Observe', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/observe.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/observe.prompt`, description: 'Analyze code and identify potential issues.' },
  { id: 'debug-ori', title: 'Debug: Orient', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/orient.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/orient.prompt`, description: 'Formulate hypotheses about the root cause.' },
  { id: 'debug-dec', title: 'Debug: Decide', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/decide.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/decide.prompt`, description: 'Propose specific debugging actions or fixes.' },
  { id: 'debug-act', title: 'Debug: Act', viewUrl: `${GITHUB_VIEW_BASE_URL}/debug/act.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/debug/act.prompt`, description: 'Generate code patches or refactoring suggestions.' },
  // Audit Mode
  { id: 'audit-sec', title: 'Audit: Security', viewUrl: `${GITHUB_VIEW_BASE_URL}/audit/security.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/audit/security.prompt`, description: 'Perform a security audit on the provided code.' },
  { id: 'audit-acc', title: 'Audit: Accessibility', viewUrl: `${GITHUB_VIEW_BASE_URL}/audit/accessibility.prompt`, rawUrl: `${GITHUB_RAW_BASE_URL}/audit/accessibility.prompt`, description: 'Perform an accessibility audit.' },
];

// Filter prompts by mode based on title prefix
const createPrompts = allPrompts.filter(p => p.title.startsWith('Create:'));
const debugPrompts = allPrompts.filter(p => p.title.startsWith('Debug:'));
const auditPrompts = allPrompts.filter(p => p.title.startsWith('Audit:'));


const PromptsShowcase: React.FC = () => {
  return (
    // Assign ID for scrolling from Hero CTA
    <Container id="prompts-section" size="lg" my="xl" /* TODO: Apply theme styling */>

      {/* Create Mode Section */}
      <Title order={2} ta="center" mb="lg" /* TODO: Style title */>
        Create Mode Prompts
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
        {createPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            title={prompt.title.replace('Create: ', '')} // Remove prefix for display
            viewUrl={prompt.viewUrl}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>

      {/* Debug Mode Section */}
      <Title order={2} ta="center" mb="lg" mt="xl" /* TODO: Style title */>
        Debug Mode Prompts
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
        {debugPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            title={prompt.title.replace('Debug: ', '')} // Remove prefix
            viewUrl={prompt.viewUrl}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>

      {/* Audit Mode Section */}
      <Title order={2} ta="center" mb="lg" mt="xl" /* TODO: Style title */>
        Audit Mode Prompts
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {auditPrompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            title={prompt.title.replace('Audit: ', '')} // Remove prefix
            viewUrl={prompt.viewUrl}
            rawUrl={prompt.rawUrl}
            description={prompt.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PromptsShowcase;
