import { ActionIcon, Anchor, Group, Image, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './PromptHeader.module.css';
import logo from '../assets/images/barbed-wire-color.svg';

const githubUrl = 'https://github.com/scragz/kornelius';

const PromptHeader = () => (
  <header className={classes.header}>
    <Anchor component={Link} to="/" className={classes.logoLink}>
      <Group gap="xs">
        <Image src={logo} alt="Logo" className={classes.logoImage} />
        <Title order={3} className={classes.title}>KoЯnelius</Title>
      </Group>
    </Anchor>
    <Anchor href={githubUrl} target="_blank" rel="noopener noreferrer">
      <ActionIcon variant="transparent" size="lg" className={classes.iconLink}>
        <IconBrandGithub size={28} />
      </ActionIcon>
    </Anchor>
  </header>
);

export default PromptHeader;
