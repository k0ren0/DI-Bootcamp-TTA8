import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const handleCalculate = () => {
    let calculatedResult = 0;

    switch (operation) {
      case 'add':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Calculator</h1>
      <input
        type="number"
        placeholder="Enter digital"
        value={num1}
        onChange={handleNum1Change}
        className="calculator-input"
      />
      <select
        value={operation}
        onChange={handleOperationChange}
        className="calculator-input"
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input
        type="number"
        placeholder="Enter digital"
        value={num2}
        onChange={handleNum2Change}
        className="calculator-input"
      />
      <button
        onClick={handleCalculate}
        className="calculator-button"
      >
        Calculate
      </button>
      {result !== '' && (
        <p className="calculator-result">{result}</p>
      )}
    </div>
  );
}

export default Calculator;
