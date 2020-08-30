import React, { useState } from 'react'
import './styles/Contador.css'

const Contador = () => {
    
    const [cuenta, setCuenta] = useState(0);

    function aumentar() {
        setCuenta(cuenta + 1)
    }

    function disminuir() {
        if (cuenta > 0) {
            setCuenta(cuenta - 1)
        }
    }

    return (
        <>
            <h1 className='contador'> Valor Actual: { cuenta } </h1>
            <button onClick={ aumentar }> Aumentar </button>
            <button onClick={ disminuir }> Disminuir </button>
        </>
    )

}

export default Contador