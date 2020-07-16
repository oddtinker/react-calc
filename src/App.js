import React, { Component } from 'react';
import classes from './App.module.css';
import Calculator from './Components/Calculator/Calculator';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className={classes.App}>
          <h1>React <span role="img" aria-label="diamond emoji">💠</span> Calculator</h1>
          <Calculator />
        </div>
      </>
    )
  }
}

export default App;