import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './BackHomeButton.module.css';

const BackHomeButton = () => (
  <div className={classes.backContainer}>
    <Anchor component={Link} to="/" className={classes.backButton}>
      Back to Home
    </Anchor>
  </div>
);

export default BackHomeButton;
