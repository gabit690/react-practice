import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = ({scale , temperature, onTemperatureChange}) => {
  function handleChange(event) {
    onTemperatureChange(event.target.value);
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default TemperatureInput;
