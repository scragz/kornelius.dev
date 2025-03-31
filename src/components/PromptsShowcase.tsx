/**
/**
 * @description
 * Component to showcase AI prompts for the Kornelius extension.
 * It displays multiple `GitHubPromptCard` components in a grid layout,
 * allowing users to view prompts on GitHub and copy their content.
 *
 * Key features:
 * - Renders a grid of `GitHubPromptCard` cards.
 * - Links titles to GitHub view URLs.
 * - Provides copy functionality via icons fetching from raw GitHub URLs.
 * - Includes a section title.
 *
 * @dependencies
 * - @mantine/core: Uses Container, Title, SimpleGrid components.
 * - React: Base library.
 * - ./GitHubPromptCard: The component used to display prompt links and copy functionality.
 *
 * @notes
 * - The prompt structure is inferred from the README features.
 * - Styling for the grid layout and title needs to be applied to match the theme.
 */
import React from 'react';
import { Container, Title, SimpleGrid } from '@mantine/core';
import GitHubPromptCard from './GitHubPromptCard'; // Import the correct component

// Base URLs for GitHub view and raw content
const GITHUB_VIEW_BASE_URL = 'https://github.com/scragz/kornelius/blob/main/prompts';
const GITHUB_RAW_BASE_URL = 'https://raw.githubusercontent.com/scragz/kornelius/main/prompts';

// Data for prompts including both view and raw URLs
const prompts = [
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


const PromptsShowcase: React.FC = () => {
  return (
    <Container size="lg" my="xl" /* TODO: Apply theme styling */>
      <Title order={2} ta="center" mb="xl" /* TODO: Style title */>
        Explore Kornelius Prompts
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }} // Responsive grid columns
        spacing="lg" // Spacing between grid items
      >
        {prompts.map((prompt) => (
          <GitHubPromptCard
            key={prompt.id}
            title={prompt.title}
            viewUrl={prompt.viewUrl} // Pass viewUrl
            rawUrl={prompt.rawUrl}   // Pass rawUrl
            description={prompt.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default PromptsShowcase;
