import React from 'react';
import ReactDOM from 'react-dom';
import Portal from './components/Portal';

ReactDOM.render(<Portal idContainer="portal-output-2"><h1>Title Children</h1><p>This is a paragraph of the unique child of div 'Portal-output'</p></Portal>, document.getElementById('root'));