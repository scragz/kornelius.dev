import { Anchor, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => (
  <footer className={classes.footer}>
    <Group gap="md" justify="center" className={classes.links}>
      <Anchor component={Link} to="/" className={classes.link}>
        Home
      </Anchor>
      <Anchor component={Link} to="/prompts" className={classes.link}>
        Prompts
      </Anchor>
      <Anchor
        href="https://github.com/scragz/kornelius"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        GitHub
      </Anchor>
    </Group>
    <div
      className={classes.legal}
    >
      <Group gap="xs" justify="center" className={classes.legalLinks}>
        <Anchor component={Link} to="/privacy" className={classes.sublink}>
          Privacy
        </Anchor>
        <Anchor component={Link} to="/accessibility" className={classes.sublink}>
          Accessibility
        </Anchor>
      </Group>
      <div className={classes.license}
        {...{ 'xmlns:cc': 'http://creativecommons.org/ns#' }}>
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          public domain license (CC0 1.0)
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
