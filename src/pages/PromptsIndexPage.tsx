import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack, Title, Text, Anchor } from '@mantine/core';
import PageBreadcrumbs from '../components/PageBreadcrumbs';
import classes from './ModePage.module.css';

const PromptsIndexPage: React.FC = () => (
  <>
    <PageBreadcrumbs items={[{ label: 'Home', to: '/#' }, { label: 'Prompts' }]} />
    <Container size="md" my="xl">
      <Stack gap="md">
        <Title order={1}>Prompts</Title>

        <Title order={2} className={classes.linkHeading}>
          <Anchor component={Link} to="/create">
            Create
          </Anchor>
        </Title>
        <Text>
          Create mode fosters generative collaboration, guiding you through ideation and specification phases. Rather than producing a final product instantly, it surfaces assumptions and edge cases, prompting reflective dialogue and iterative co-creation of project requirements.
        </Text>
        <Text>
          By structuring inputs into distinct phases, brainstorm, plan, and implement, Create mode ensures depth, context, and modular clarity. It encourages pluralistic thinking, drawing on diverse knowledge systems and inviting you to challenge your own design paradigms.
        </Text>

        <Title order={2} className={classes.linkHeading}>
          <Anchor component={Link} to="/debug">
            Debug
          </Anchor>
        </Title>
        <Text>
          Debug mode adopts a cybernetic feedback loop, Observe, Orient, Decide, Act, to collaboratively diagnose and resolve issues. It transforms error reports into structured investigations, emphasizing clarity, hypothesis generation, and risk-aware decision-making.
        </Text>
        <Text>
          This mode balances analytical rigor with dialogue, ensuring that each proposed fix is evaluated against system stability and user impact. It embodies co-learning: you iteratively refine your understanding of the problem as you implement and verify solutions.
        </Text>

        <Title order={2} className={classes.linkHeading}>
          <Anchor component={Link} to="/audit-a11y">
            Accessibility Audit Guidance
          </Anchor>
        </Title>
        <Text>
          Accessibility is not optional, it's integral to inclusive design. This prompt audits UI against WCAG and ADA standards, highlighting barriers and guiding remedial actions grounded in real user contexts, from vision impairments to motor differences.
        </Text>

        <Title order={2} className={classes.linkHeading}>
          <Anchor component={Link} to="/prompts/audit-security">
            Security Hardening Blueprint
          </Anchor>
        </Title>
        <Text>
          Security underpins trust and resilience. This blueprint prompt conducts threat modeling tailored for modern applications, surfacing both classic and AI-specific vulnerabilities. It prioritizes mitigations by impact and feasibility, fostering a proactive, dialogic security culture.
        </Text>
      </Stack>
    </Container>
  </>
);

export default PromptsIndexPage;
