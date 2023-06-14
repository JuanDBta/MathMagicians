import React from 'react';

export default function Calculator() {
  return (
    <>
      <section className="calc-container">
        <div className="display">0</div>
        <div className="keyboard">

          <div className="numbers">
            <div className="number-buttons">AC</div>
            <div className="number-buttons">+/-</div>
            <div className="number-buttons">%</div>
            <div className="number-buttons">7</div>
            <div className="number-buttons">8</div>
            <div className="number-buttons">9</div>
            <div className="number-buttons">4</div>
            <div className="number-buttons">5</div>
            <div className="number-buttons">6</div>
            <div className="number-buttons">1</div>
            <div className="number-buttons">2</div>
            <div className="number-buttons">3</div>
            <div className="number-buttons">0</div>
            <div className="number-buttons">.</div>
          </div>

          <div className="operators">
            <div className="operators-buttons">÷</div>
            <div className="operators-buttons">x</div>
            <div className="operators-buttons">-</div>
            <div className="operators-buttons">+</div>
            <div className="operators-buttons">=</div>
          </div>

        </div>
      </section>
    </>
  );
}
