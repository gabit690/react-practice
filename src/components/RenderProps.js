import React, { useState } from "react";

import catPhoto from './assets/cat.png';

const Cat = ({ position }) => {
  return <>
    <h1>Watch out with Nyan Cat</h1>
    <img 
      src={catPhoto} 
      alt="Nyan cat figure" 
      style={{ position: 'absolute', left: position.x - 75, top: position.y - 10 }}
    />
  </>
}

const Position = (props) => {
  const [pos, setPos] = useState({x:0, y:0});

  function handleMouseMove(event) {
    setPos({x: event.clientX, y: event.clientY});
  }

  return (
    <div 
      style={{ height: '100vh'}} 
      onMouseMove={handleMouseMove}
    >
      {props.render(pos)}
    </div>
  );
}

const Human = () => {
  return <>
    <Position render={data => (<Cat position={data} />)}/>
  </>
}

export default Human;
