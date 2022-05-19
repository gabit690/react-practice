import React from "react";

function presentation(id) {
  alert(`I'm a button element. My ID is ${id}`);
}

const ActionButton = React.forwardRef((props, ref) => (
    <button id="btn-01" ref={ref} onClick={() => presentation(ref.current.id)}>
      {props.children}
    </button>
));
  
const ref = React.createRef();

export default <ActionButton ref={ref}>Click me!</ActionButton>;