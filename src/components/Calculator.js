import React, { useState } from "react";
import Button from "./Button";
import Buttonop from "./Buttonop";
import Display from "./Display";

const Calculator = () => {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("0");
    } else {
      setResult((prev) => (prev === "0" ? String(value) : prev + value));
    }
  };
  const array = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "="];
  const operator = ["-", "/", "*", "+", ".",'C'];
  return (
    <div className="calculator">
      <Display value={result} />
      <div className="buttons top">
        {operator.map((e) => (
          <Buttonop key={e} value={e} onClick={handleClick} />
        ))}
      </div>
      <div className="buttons">
        {array.map((item) => (
          <Button key={item} value={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
