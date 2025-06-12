import { Anchor, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './ModeFooter.module.css';

const ModeFooter = () => (
  <footer className={classes.footer}>
    <Group justify="center">
      <Anchor component={Link} to="/create" className={classes.link}>
        Create
      </Anchor>
      <Anchor component={Link} to="/audit" className={classes.link}>
        Audit
      </Anchor>
      <Anchor component={Link} to="/debug" className={classes.link}>
        Debug
      </Anchor>
    </Group>
  </footer>
);

export default ModeFooter;
