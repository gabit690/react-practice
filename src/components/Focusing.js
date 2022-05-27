import React, { useEffect, useState, useRef } from "react";

const Focusing = () => {
  const [text, setText] = useState('');
  const inputElement = React.createRef();
  const isInitialMount = useRef(true);

  
  useEffect(() => {
    console.log("Focusing MOUNTED");
  }, [])
  
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      console.log("Focusing UPDATED");
    }
  });

  function handleChange(value) {
    setText(value);
  }

  function showBox() {
    alert(text);
    inputElement.current.focus();
  }

  return (
    <>
      <h1>Focusing</h1>
      <button onClick={showBox.bind(this)}>Show box</button>
      <label htmlFor="name"></label>
      <input 
        type="text" 
        defaultValue={text}
        ref={inputElement}
        onChange={(ev) => handleChange(ev.target.value)}
        placeholder='Change this field'
      />
    </>
  );
}

export default Focusing;
