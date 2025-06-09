import { Anchor, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import classes from './PromptHeader.module.css';
import logoClasses from './Logo.module.css';
import logo from '../assets/images/barbed-wire-color.svg';
import ActionIcons from './ActionIcons';

const PromptHeader = () => (
  <header className={classes.header}>
    <Anchor component={Link} to="/" className={classes.logoLink}>
      <div className={classNames(logoClasses.logoContainer, classes.logoContainer)}>
        <img src={logo} alt="Logo" className={classNames(logoClasses.barbedWire, classes.barbedWireSmall)} />
        <Text className={logoClasses.logoText}>KoЯnelius</Text>
      </div>
    </Anchor>
    <ActionIcons className={classes.actionIcons} />
  </header>
);

export default PromptHeader;
