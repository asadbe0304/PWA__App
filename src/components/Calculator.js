// Calculator.js
import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberClick = (value) => {
    if (waitingForOperand) {
      setDisplay(String(value));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(value) : display + value);
    }
  };

  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
      setWaitingForOperand(false);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (operator) {
      const currentValueUpdated = parseFloat(currentValue || "0");
      const newValue = operate(currentValueUpdated, inputValue, operator);
      setCurrentValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEqualClick = () => {
    const inputValue = parseFloat(display);

    if (currentValue !== null && operator) {
      const currentValueUpdated = parseFloat(currentValue || "0");
      const newValue = operate(currentValueUpdated, inputValue, operator);
      setCurrentValue(null);
      setOperator(null);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
  };

  const operate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return b;
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={handleDecimalClick}>.</button>
        {["+", "-", "*", "/"].map((op) => (
          <button className="opt" key={op} onClick={() => handleOperatorClick(op)}>
            {op}
          </button>
        ))}
        <button className="opt" onClick={handleEqualClick}>=</button>
        <button className="opt" onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
