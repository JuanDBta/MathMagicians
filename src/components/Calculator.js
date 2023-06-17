import React, { useState } from 'react';
import './Calculator.css';
import Button from './Buttons';
import calculate from '../logic/calculate';

// Calculator component
function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <section className="calc-container">
      <div className="display">0</div>
      <div className="keyboard">
        <div className="numbers">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="÷" onClick={() => handleButtonClick('÷')} />
          <div className="number-buttons">7</div>
          <div className="number-buttons">8</div>
          <div className="number-buttons">9</div>
          <Button label="x" onClick={() => handleButtonClick('x')} />
          <div className="number-buttons">4</div>
          <div className="number-buttons">5</div>
          <div className="number-buttons">6</div>
          <Button label="-" onClick={() => handleButtonClick('-')} />
          <div className="number-buttons">1</div>
          <div className="number-buttons">2</div>
          <div className="number-buttons">3</div>
          <Button label="+" onClick={() => handleButtonClick('+')} />
          <div className="number-buttons-zero">0</div>
          <div className="number-buttons">.</div>
          <Button label="=" onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
