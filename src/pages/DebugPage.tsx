import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack, Title, Text, Anchor } from '@mantine/core';
import PageBreadcrumbs from '../components/PageBreadcrumbs';
import ModeFooter from '../components/ModeFooter';
import classes from './ModePage.module.css';

const DebugPage: React.FC = () => (
  <>
    <PageBreadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Debug' }]} />
    <Container size="md" my="xl">
      <Stack gap="md">
        <Title order={1}>Debug</Title>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/debug-observe">Observe</Anchor>
      </Title>
      <Text>
        In the Observe phase of the OODA loop, this prompt positions the AI as a forensic investigator. It parses the user’s bug report and context, summarizes key observations without regurgitating long dumps, and highlights patterns or missing details. Crucially, it also asks clarifying questions to surface any gaps in information, such as environment specifics or error logs, before proceeding.
      </Text>
      <Text>
        Its special feature is the structured checklist format, which helps maintain focus on the most relevant data points—user inputs, system state, and immediate anomalies. By explicitly separating observations from questions, it fosters a clear dialogue where the user and AI collaboratively build a complete picture of the issue.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/debug-orient">Orient</Anchor>
      </Title>
      <Text>
        The Orient phase takes the insights from Observe, integrates new clarifications, and begins to form hypotheses about root causes. This prompt directs the AI to review the summarized context, identify suspicious patterns like memory leaks or version mismatches, and organize these findings into logical groupings. It’s akin to a rapid analysis session where you make sense of the data before acting.
      </Text>
      <Text>
        Subtly, it pushes the AI to consider broader systemic factors—dependencies, recent deployments, or third-party changes—that aren’t obvious from the initial bug report. This wider lens can surface power asymmetries in the tech stack and invite discussion about alternative debugging approaches.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/debug-decide">Decide</Anchor>
      </Title>
      <Text>
        In the Decide phase, the AI reviews the hypotheses and any constraints like time, risk tolerance, and resource availability to propose a handful of viable next steps. These might include gathering more logs, rolling back a release, or applying a targeted patch. Each option comes with a pros and cons analysis, so the user can weigh trade-offs and choose the path best aligned with their priorities.
      </Text>
      <Text>
        What’s not immediately obvious is its encouragement of risk-aware decision-making: by asking the AI to factor in constraints, the prompt mimics real-world incident response where quick fixes must be balanced against system stability and user impact. This fosters dialogue rather than a prescriptive approach.
      </Text>

      <Title order={2} className={classes.linkHeading}>
        <Anchor component={Link} to="/prompts/debug-act">Act</Anchor>
      </Title>
      <Text>
        Finally, the Act phase turns the chosen decision into concrete implementation steps. The prompt interprets the user’s selected action and guides them through specific tasks: code changes, configuration tweaks, or rollbacks. It also suggests validation and testing strategies like unit tests or smoke tests to confirm that the fix worked.
      </Text>
      <Text>
        A key nuance is its dual focus on execution and verification. It reminds the user not only how to apply the change but how to measure success, closing the OODA loop and laying the groundwork for continuous improvement. This integration of action with validation embodies a cybernetic feedback loop, ensuring that each intervention is both deliberate and observable.
      </Text>
      </Stack>
    </Container>
    <ModeFooter />
  </>
);

export default DebugPage;
