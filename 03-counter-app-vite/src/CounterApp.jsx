import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ( { value } ) => {

    const saludar = () => {
        console.log("Hola");
    }

    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter(counter * 2);
    }
    const handleSubstract = () => {
        setCounter( counter - 1);
    }
    const handleReset = () => {
        setCounter(value);
    }
 

    return (
        <>
        <h1>RTP App</h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>Click X 2</button>
        <button onClick={ handleSubstract }>Click - 1</button>
        <button onClick={ handleReset }>Reset</button>



        </>
    )
};

CounterApp.propTypes ={
    value: PropTypes.number
};
