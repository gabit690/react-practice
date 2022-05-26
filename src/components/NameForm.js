import React, { useState } from 'react';

const NameForm = () => {
  
  const [value, setValue] = useState('');
  const inputElement = React.createRef();

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + value);
    setValue('');
    inputElement.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type='text' 
          value={value} 
          onChange={handleChange} 
          ref={inputElement} 
        />
      </label>
      <input 
        type='submit' 
        value='Send'
      />
    </form>
  );
}

export default NameForm;
