import React from 'react';
import { Container, Stack, Title, Text } from '@mantine/core';

const AuditPage: React.FC = () => (
  <Container size="md" my="xl">
    <Stack gap="md">
      <Title order={1}>Audit</Title>

      <Title order={2}>Accessibility Audit Guidance</Title>
      <Text>
        The Accessibility Audit Guidance prompt transforms a piece of UI—be it code snippets, design mockups, or live web pages—into a comprehensive audit report aligned with WCAG, Section 508, and ADA guidelines. At its core, you feed it your markup or screenshots along with context about your target users (e.g., people with low vision, motor impairments, cognitive differences), and it returns a prioritized list of issues (from high-severity barriers to optional “nice-to-haves”), complete with recommended code fixes, ARIA attributes, and design adjustments. Rather than just flagging failures, it often surfaces the why behind each issue, linking technical mistakes to real-world user frustrations—ensuring the feedback remains grounded in human experience.
      </Text>
      <Text>
        A less obvious strength lies in its intersectional lens: it doesn’t treat “accessibility” as a monolith but invites you to consider diverse modes of perception and interaction. For example, it may alert you that your color contrast is fine for most but still problematic for certain types of color blindness, or that keyboard-only navigation uncovers hidden focus traps affecting screen-reader users. It can even prompt you to run simple manual tests—like using voice controls or switching off styles—to verify automated findings, pushing beyond pure code analysis into participatory design territory. This dynamic, two-way auditing style helps teams co-create solutions with the very communities they intend to serve.
      </Text>

      <Title order={2}>Security Hardening Blueprint</Title>
      <Text>
        The Security Hardening Blueprint prompt serves as your AI-powered red team engineer. You present it with your application architecture, codebase excerpts, or deployment configuration, and it walks through a threat modeling exercise: identifying potential attack vectors (SQL injection, misconfigured CORS, insecure dependencies), recommending guardrails (parameterized queries, strict CSP, dependency pinning), and mapping out an incident response playbook. It also offers concrete CLI commands or code snippets for tools like OpenSSL, OWASP ZAP, or static analyzers, turning abstract security principles into actionable steps.
      </Text>
      <Text>
        Beneath the surface, it’s optimized for AI-specific vulnerabilities: model poisoning, prompt injection, data leakage through logs, or inference attacks on your endpoints. It will push you to think like an adversary—what happens if someone queries your embedding store, manipulates API tokens, or chains known CVEs in your container images? Even more subtly, it layers in a risk-prioritization framework, weighing each recommendation against impact and implementation cost so you can triage effectively. By inviting you to reflect on organizational constraints (time, skills, compliance mandates), it fosters a dialogic approach: security isn’t a checkbox but an evolving collaboration between your team and the ever-shifting threat landscape.
      </Text>
    </Stack>
  </Container>
);

export default AuditPage;
