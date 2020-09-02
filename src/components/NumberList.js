import React from 'react'

function NumberList(props) {
    
    const numbers = props.numbers;
    
    return(
        <ul>
            {numbers.map((number) => 
                <li number={number.toString()}> {number} </li>
            )}
        </ul>
    )
}

export default NumberList