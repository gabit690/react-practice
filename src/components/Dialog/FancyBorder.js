import React from 'react';

import '../styles/FancyBorder.css';

const FancyBorder = ({ color, children }) => {
  return (
    <div className={`FancyBorder FancyBorder-${color}`}>
      {children}
    </div>
  );
}

export default FancyBorder;
