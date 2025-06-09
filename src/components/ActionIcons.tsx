import React from 'react';
import classNames from 'classnames';
import { Group, ActionIcon, Anchor, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconDownload } from '@tabler/icons-react';
import classes from './ActionIcons.module.css';

interface ActionIconsProps {
  className?: string;
}

const ActionIcons: React.FC<ActionIconsProps> = ({ className }) => {
  const githubUrl = 'https://github.com/scragz/kornelius';
  const downloadUrl =
    'https://github.com/scragz/kornelius/releases/download/v0.1.12/kornelius-0.1.12.vsix';

  return (
    <Group gap="sm" className={classNames(classes.group, className)}>
      <Tooltip label="View on GitHub" withArrow position="bottom-end">
        <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer">
          <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
            <IconBrandGithub size={28} />
          </ActionIcon>
        </Anchor>
      </Tooltip>
      <Tooltip label="Get Extension" withArrow position="bottom-end">
        <Anchor href={downloadUrl} target="_blank" rel="noopener noreferrer">
          <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
            <IconDownload size={28} />
          </ActionIcon>
        </Anchor>
      </Tooltip>
    </Group>
  );
};

export default ActionIcons;
