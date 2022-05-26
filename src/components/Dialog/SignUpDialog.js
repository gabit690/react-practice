import React, { useState } from 'react';
import Dialog from './Dialog';

const SignUpDialog = () => {
  const [username, setUsername] = useState('');

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleSignUp() {
    alert(`Welcome aboard, ${username}!!!`);
  }

  return (
    <Dialog
      title='Mars Exploration Program'
      message='How should we refer to you?'  
    >
      <input 
        value={username}
        onChange={handleChange} 
      />
      <button onClick={handleSignUp}>
        Im in!
      </button>
    </Dialog>
  );
}

export default SignUpDialog;
