import React from 'react';
import classes from './Display.module.css';

const Display = props => (
  <div className={classes.Display}>
    <p className={classes.Output}>{props.children}</p>
  </div>
);

export default Display;