import React from 'react';
import './Calculator.css';
import Button from './Buttons';
import '../logic/calculate';

// Calculator component
function Calculator() {
  return (
    <section className="calc-container">
      <div className="display">0</div>
      <div className="keyboard">

        <div className="numbers">
          <Button label="AC" />
          <Button label="+/-" />
          <Button label="%" />
          <Button label="÷" />
          <div className="number-buttons">7</div>
          <div className="number-buttons">8</div>
          <div className="number-buttons">9</div>
          <Button label="x" />
          <div className="number-buttons">4</div>
          <div className="number-buttons">5</div>
          <div className="number-buttons">6</div>
          <Button label="-" />
          <div className="number-buttons">1</div>
          <div className="number-buttons">2</div>
          <div className="number-buttons">3</div>
          <Button label="+" />
          <div className="number-buttons-zero-left" />
          <div className="number-buttons-zero-right">0</div>
          <div className="number-buttons">.</div>
          <Button label="=" />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
