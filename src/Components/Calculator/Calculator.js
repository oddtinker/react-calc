import React, { Component } from 'react';
import classes from './Calculator.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

class Calculator extends Component {
  state = {
    operand1: null,
    operand2: null,
    operator: null,
    result: null,
  };
  setOperand = value => {
    if (this.state.operator) {
      if (!this.state.operand2) {
        if (value === ".") {
          this.setState({ operand2: 0 + value });
        } else {
          this.setState({ operand2: value });
        }
      } else if (value !== "." || (this.state.operand2.indexOf(".") === -1)) {
        this.setState(prev => ({ operand2: prev.operand2.concat(value) }));
      }
    } else {
      if (!this.state.operand1) {
        if (value === ".") {
          this.setState({ operand1: 0 + value });
        } else {
          this.setState({ operand1: value });
        }
      } else if (value !== "." || (this.state.operand1.indexOf(".") === -1)) {
        this.setState(prev => ({ operand1: prev.operand1.concat(value) }));
      }
    }
  };
  setOperator = value => {
    if (!this.state.operator) {
      this.setState({ operator: value });
    }
  };
  reset = () => {
    this.setState({
      operand1: null,
      operand2: null,
      operator: null,
      result: null,
    });
  };
  backspace = () => {
    if (this.state.operand2) {
      this.setState(prev => ({ operand2: prev.operand2.slice(0, -1) }));
    } else if (this.state.operator) {
      this.setState({ operator: null });
    } else if (this.state.operand1) {
      this.setState(prev => ({ operand1: prev.operand1.slice(0, -1) }));
    }
  };
  calculate = () => {
    if (this.state.operand1 && this.state.operator && this.state.operand2) {
      let result = 0;
      switch (this.state.operator) {
        case "+":
          result = Number(this.state.operand1) + Number(this.state.operand2);
          break;
        case "-":
          result = Number(this.state.operand1) - Number(this.state.operand2);
          break;
        case "*":
          result = Number(this.state.operand1) * Number(this.state.operand2);
          break;
        case "/":
          if (this.state.operand2 !== 0) {
            result = Number(this.state.operand1) / Number(this.state.operand2);
          }
          break;
        default:
          this.setState({ result });
          break;
      }
      this.setState({ result: result.toFixed(1) });
    }
  };
  render() {
    let output = 0;
    if (this.state.result) {
      output = this.state.result;
    } else if (this.state.operand2) {
      output = this.state.operand2;
    } else if (this.state.operator) {
      output = this.state.operator;
    } else if (this.state.operand1) {
      output = this.state.operand1;
    }
    return (
      <div className={classes.CalculatorBody}>
        <Display>{output}</Display>
        <div className={classes.Keypad}>
          <div className={classes.KeypadRow}>
            <Button
              name="calculate"
              handleClick={this.calculate}>=</Button>
            <Button
              name="0"
              handleClick={this.setOperand}>0</Button>
          </div>
          <div className={classes.KeypadRow}>
            <Button
            name="1"
            handleClick={this.setOperand}>1</Button>
            <Button
            name="2"
            handleClick={this.setOperand}>2</Button>
            <Button
            name="3"
            handleClick={this.setOperand}>3</Button>
            <Button
            name="+"
            handleClick={this.setOperator}>+</Button></div>
          <div className={classes.KeypadRow}>
          <Button
            name="4"
            handleClick={this.setOperand}>4</Button>
            <Button
            name="5"
            handleClick={this.setOperand}>5</Button>
            <Button
            name="6"
            handleClick={this.setOperand}>6</Button>
            <Button
            name="-"
            handleClick={this.setOperator}>-</Button></div>
          <div className={classes.KeypadRow}>
            <Button
            name="7"
            handleClick={this.setOperand}>7</Button>
            <Button
            name="8"
            handleClick={this.setOperand}>8</Button>
            <Button
            name="9"
            handleClick={this.setOperand}>9</Button>
            <Button
            name="*"
            handleClick={this.setOperator}>*</Button></div>
          <div className={classes.KeypadRow}>
            <Button
            name="."
            handleClick={this.setOperand}>.</Button>
            <Button
            name="reset"
            handleClick={this.reset}>C</Button>
            <Button
            name="backspace"
            handleClick={this.backspace}>B</Button>
            <Button
            name="/"
            handleClick={this.setOperator}>/</Button></div>
        </div>
      </div>
    )
  }
}

export default Calculator;