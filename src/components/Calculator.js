import React from 'react';

export default function Calculator() {

  return(
    <>
    <section class="calc-container">
        <div class="display">0</div>
        <div class="keyboard">
          
          <div class="numbers">
            <div class="number-buttons">AC</div>
            <div class="number-buttons">+/-</div>
            <div class="number-buttons">%</div>
            <div class="number-buttons">7</div>
            <div class="number-buttons">8</div>
            <div class="number-buttons">9</div>
            <div class="number-buttons">4</div>
            <div class="number-buttons">5</div>
            <div class="number-buttons">6</div>
            <div class="number-buttons">1</div>
            <div class="number-buttons">2</div>
            <div class="number-buttons">3</div>
            <div class="number-buttons">0</div>
            <div class="number-buttons">.</div>  
          </div> 
          
          <div class="operators">
            <div class="operators-buttons">÷</div>
            <div class="operators-buttons">x</div>
            <div class="operators-buttons">-</div>
            <div class="operators-buttons">+</div>
            <div class="operators-buttons">=</div>
          </div>

        </div>
    </section>
    </>
  );
}