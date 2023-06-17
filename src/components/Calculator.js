import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';

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
      <div className="display">{calculatorData.next || calculatorData.total || 0}</div>
      <div className="keyboard">
        <div className="numbers">
          <Button className="operators" label="AC" onClick={() => handleButtonClick('AC')} />
          <Button className="operators" label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button className="operators" label="%" onClick={() => handleButtonClick('%')} />
          <Button className="operators" label="÷" onClick={() => handleButtonClick('÷')} />
          <Button className="number-buttons" label="7" onClick={() => handleButtonClick('7')} />
          <Button className="number-buttons" label="8" onClick={() => handleButtonClick('8')} />
          <Button className="number-buttons" label="9" onClick={() => handleButtonClick('9')} />
          <Button className="operators" label="x" onClick={() => handleButtonClick('x')} />
          <Button className="number-buttons" label="4" onClick={() => handleButtonClick('4')} />
          <Button className="number-buttons" label="5" onClick={() => handleButtonClick('5')} />
          <Button className="number-buttons" label="6" onClick={() => handleButtonClick('6')} />
          <Button className="operators" label="-" onClick={() => handleButtonClick('-')} />
          <Button className="number-buttons" label="1" onClick={() => handleButtonClick('1')} />
          <Button className="number-buttons" label="2" onClick={() => handleButtonClick('2')} />
          <Button className="number-buttons" label="3" onClick={() => handleButtonClick('3')} />
          <Button className="operators" label="+" onClick={() => handleButtonClick('+')} />
          <Button className="number-buttons-zero" label="0" onClick={() => handleButtonClick('0')} />
          <Button className="number-buttons" label="." onClick={() => handleButtonClick('.')} />
          <Button className="operators" label="=" onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
