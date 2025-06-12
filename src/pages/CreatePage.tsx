import React from 'react';
import { Container, Stack, Title, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './ModePage.module.css';

const CreatePage: React.FC = () => (
  <Container size="md" my="xl">
    <Stack gap="md">
      <Title order={1}>Create</Title>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/create-request">
          Idea Refinement
        </Anchor>
      </Title>
      <Text>
        Idea Refinement prompt acts as a collaborative brainstorming partner to help users flesh out raw project or feature concepts into well-structured, actionable requests. At its core, it solicits an initial PROJECT_REQUEST and then dynamically guides the conversation by asking targeted clarifying questions, surfacing missing user flows, and suggesting perspectives that the user might not have considered. It’s designed not to hand you a fully formed spec immediately, but to engage you in a dialogue—inviting you to co-create the scope, goals, and edge cases before moving forward.
      </Text>
      <Text>
        A less obvious strength of this prompt is its built-in mechanism for surfacing “unknown unknowns.” By explicitly prompting the AI to suggest missing considerations or user flows, it mirrors an anthropological approach—drawing on experiential knowledge rather than just technical checklists. This helps prevent tunnel vision and encourages a plurality of viewpoints, including potential accessibility, cultural, or regulatory constraints that might otherwise go unnoticed.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/create-spec">
          Technical Specification Generation
        </Anchor>
      </Title>
      <Text>
        The Technical Specification Generation prompt is your blueprint architect: given a raw REQUEST and any RULES or best practices, it constructs a detailed, markdown-structured spec suitable for guiding engineers or code-generation AIs. It begins with an internal planning section where the AI maps out high-level architecture, data flows, and integration points before delivering the final spec in one of two templates. This two-phase design ensures both depth and structure, reducing the risk of missing critical system components.
      </Text>
      <Text>
        A special feature of this prompt is its dual-template flexibility. Whether you’re green-fielding a product or iterating on an existing codebase, it automatically chooses the right layout—covering everything from API endpoints and database schemas to UI components and background jobs. It even scaffolds a design system section with accessibility considerations baked in, pushing beyond bare-bones technical specs to include visual style, theming, and responsive breakpoints.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/create-planner">
          Implementation Plan Generation
        </Anchor>
      </Title>
      <Text>
        Think of the Implementation Plan Generation prompt as the project manager for a code-generation AI: it transforms a technical specification into a step-by-step roadmap that a script or developer can follow sequentially. It requires you to supply PROJECT_REQUEST, PROJECT_RULES, TECHNICAL_SPECIFICATION, and optional reference code, then issues a two-part output: a brainstorming tag capturing the logic behind the plan and a detailed markdown checklist of discrete, self-contained tasks.
      </Text>
      <Text>
        What’s easily overlooked is its emphasis on granularity and isolation—each task is meant to be atomic, avoiding the ambiguity that can derail automated code generators. It also signals to the AI to consider shared components, authentication flows, and database migrations in a holistic fashion, smoothing the handoff between planning and coding. By embedding the brainstorming rationale, it preserves the why behind each step, which is crucial for audits and future iterations.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/create-codegen">
          Code Generation
        </Anchor>
      </Title>
      <Text>
        The Code Generation prompt functions like a master craftsman’s instruction manual: given an IMPLEMENTATION_PLAN, TECHNICAL_SPECIFICATION, and PROJECT_REQUEST (plus optional PROJECT_RULES and EXISTING_CODE), it systematically implements the next step in the plan. Instead of dumping all code at once, it tracks progress, reviews which checklist items are done, and then produces the precise files or modifications needed for the current step.
      </Text>
      <Text>
        A subtle but powerful aspect is its insistence on complete file contents and adherence to strict documentation conventions. This prevents half-baked code snippets and encourages consistent styling. It’s effectively a single-step code generator, reducing merge conflicts and making incremental reviews easier—much like a developer pair-programming one function at a time.
      </Text>
    </Stack>
  </Container>
);

export default CreatePage;
