/**
 * @description
 * Displays a card linking to a prompt file on GitHub, with an icon to fetch
 * and copy the raw prompt content. Designed with a more "vibey" interaction.
 *
 * Key features:
 * - Title links directly to the prompt file view on GitHub.
 * - Copy icon fetches raw content and copies to clipboard on click.
 * - Copy icon shows loading, success, and error states.
 * - Optional description display.
 *
 * @dependencies
 * - @mantine/core: Uses Card, Text, Anchor, Group, ActionIcon, Tooltip. (Removed Loader)
 * - @tabler/icons-react: For copy, check, alert, loader icons.
 * - React: Base library, useState, useCallback.
 * - ./GitHubPromptCard.module.css: Component-specific styles.
 *
 * @notes
 * - Styling needs heavy customization for the nu-metal/Myspace theme.
 * - Error handling logs to console; user-facing notifications could be added.
 * - Ensure @keyframes spin is defined globally (e.g., in index.css).
 */
import React, { useState, useCallback } from 'react';
import { Card, Text, Group, Tooltip, ActionIcon, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconCopy, IconCheck, IconAlertCircle, IconLoader } from '@tabler/icons-react';
import classes from './GitHubPromptCard.module.css'; // Import CSS module

interface GitHubPromptCardProps {
  id: string;
  title: string;
  rawUrl: string;
  description?: string;
}

type CopyState = 'idle' | 'loading' | 'success' | 'error';

const GitHubPromptCard: React.FC<GitHubPromptCardProps> = ({ id, title, rawUrl, description }) => {
  const [copyState, setCopyState] = useState<CopyState>('idle');

  const handleFetchAndCopy = useCallback(async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (copyState !== 'idle' && copyState !== 'error') return;

    setCopyState('loading');
    try {
      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const promptText = await response.text();
      await navigator.clipboard.writeText(promptText);
      setCopyState('success');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (err) {
      console.error('Failed to fetch or copy prompt:', err);
      setCopyState('error');
      setTimeout(() => setCopyState('idle'), 3000);
    }
  }, [rawUrl, copyState]);

  const renderCopyIcon = () => {
    switch (copyState) {
      case 'loading':
        return <IconLoader size={16} style={{ animation: 'spin 1s linear infinite' }} />;
      case 'success':
        return <IconCheck size={16} color="var(--mantine-color-teal-6)" />; // Use Mantine theme color variable
      case 'error':
        return <IconAlertCircle size={16} color="var(--mantine-color-red-6)" />; // Use Mantine theme color variable
      case 'idle':
      default:
        return <IconCopy size={16} />;
    }
  };

  const getTooltipLabel = () => {
    switch (copyState) {
      case 'loading': return 'Copying...';
      case 'success': return 'Copied!';
      case 'error': return 'Error copying';
      default: return 'Copy prompt';
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
      <Group justify="space-between" align="flex-start" wrap="nowrap" className={classes.contentGroup}>
        <Anchor
          component={Link}
          to={`/prompt/${id}`}
          fz="lg"
          fw={700}
          className={classes.titleLink}
        >
          {title}
        </Anchor>

        <Tooltip label={getTooltipLabel()} withArrow position="top" opened={copyState !== 'idle'}>
          <ActionIcon
            variant="subtle"
            onClick={handleFetchAndCopy}
            disabled={copyState === 'loading' || copyState === 'success'}
            color={copyState === 'error' ? 'red' : 'gray'}
            aria-label={getTooltipLabel()}
            className={classes.copyIcon} // Apply class from CSS module
          >
            {renderCopyIcon()}
          </ActionIcon>
        </Tooltip>
      </Group>

      {description && (
        <Text size="sm" mt="sm" className={classes.description}> {/* Apply class */}
          {description}
        </Text>
      )}
    </Card>
  );
};

// Removed JS keyframe injection - ensure @keyframes spin is in global CSS (index.css)

export default GitHubPromptCard;
