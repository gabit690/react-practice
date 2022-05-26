import React, { useState } from 'react';

const FlavorForm = () => {
  const [value, setValue] = useState('lime');
  
  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('Your favorite flavor is: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value='grapefruit'>Grapefruit</option>
          <option value='lime'>Lime</option>
          <option value='coconut'>Coconut</option>
          <option value='mango'>Mango</option>
        </select>
      </label>
      <input type='submit' value='Send' />
    </form>
  );
}

export default FlavorForm;
