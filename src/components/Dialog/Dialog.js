import React from 'react';
import FancyBorder from './FancyBorder';

import '../styles/Dialog.css';

const Dialog = ({ title, message, children}) => {
  return (
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>
        {title}
      </h1>
      <p className='Dialog-message'>
        {message}
      </p>
      {children}
    </FancyBorder>
  );
}

export default Dialog;