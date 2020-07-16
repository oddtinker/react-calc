import React from 'react';
import classes from './Navigation.module.css';
import Link from '../Link/Link';

const Navigation = () => (
  <nav className={classes.Navigation}>
    <div className={classes.LinkDiv}>
      <Link url="https://larisachristie.github.io/vanilla-calc/">Vanilla JS</Link>
    </div>
    <div className={classes.LinkDiv}>
      <Link url="https://larisachristie.github.io/react-calc/">React</Link>
    </div>
  </nav>
);

export default Navigation;