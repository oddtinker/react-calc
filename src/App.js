import React, { Component } from 'react';
import classes from './App.module.css';
import Keypad from './Components/Keypad/Keypad';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>React <span role="img" aria-label="diamond emoji">💠</span> Calculator</h1>
        <Keypad />
      </div>
    )
  }
}

export default App;