import React, { Component } from 'react';
import classes from './Keypad.module.css';
import Display from '../Display/Display';
import Button from '../Button/Button';

class Keypad extends Component {
  state = {
    operators: ["/", "*", "+", "-"],
    operands: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."],
    actions: ["C", "=", "B"],
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
    this.setState({ operator: value });
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
  };
  render() {
    const operands = this.state.operands.map(button => (
      <Button
      key={button + "operand"}
      name={button}
      handleClick={this.setOperand}>{button}</Button>)
    );
    const operators = this.state.operators.map(button => (
      <Button
      key={button + "operator"}
      name={button}
      handleClick={this.setOperator}>{button}</Button>)
    );
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
      <div className={classes.KeypadBody}>
        <Display>{output}</Display>
        <div className={classes.Keypad}>
          <div className={classes.Actions}>
          <Button
            key="reset"
            name="reset"
            handleClick={this.reset}>C</Button>
          <Button
            key="calculate"
            name="calculate"
            handleClick={this.calculate}>=</Button>
          <Button
            key="backspace"
            name="backspace"
            handleClick={this.backspace}>B</Button>
          </div>
          <div className={classes.Operators}>{operators}</div>
          <div className={classes.Operands}>{operands}</div>
        </div>
      </div>
    )
  }
}

export default Keypad;