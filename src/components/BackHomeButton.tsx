import { Anchor, Breadcrumbs } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './BackHomeButton.module.css';

interface BackHomeButtonProps {
  mode: string;
}

const BackHomeButton = ({ mode }: BackHomeButtonProps) => (
  <Breadcrumbs mb="sm" className={classes.breadcrumbs}>
    <Anchor component={Link} to="/" className={classes.breadcrumbLink}>
      Home
    </Anchor>
    <span>{mode}</span>
  </Breadcrumbs>
);

export default BackHomeButton;
