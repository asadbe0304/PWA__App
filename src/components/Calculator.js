import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [result, setResult] = useState('0');
  
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('0');
    } else {
      setResult(prev => prev === '0' ? String(value) : prev + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={result} />
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'].map(item => (
          <Button key={item} value={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
