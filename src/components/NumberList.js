import React from 'react'

const NumberList = ({ numbers }) => {
    
  return(
    <ul>
      {numbers.map((number, index) => 
        <li 
          key={index} 
          number={number.toString()}
        > 
          {number}
        </li>
      )}
    </ul>
  );
}

export default NumberList;
