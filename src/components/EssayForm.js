import React, { useState } from 'react';

const EssayForm = () => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('An essay was submitted: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <textarea 
        value={value} 
        onChange={handleChange} 
        placeholder="Please write an essay about your favorite DOM element."
      />
      </label>
      <input 
        type='submit' 
        value='Send'
      />
    </form>
  );
}

export default EssayForm;
