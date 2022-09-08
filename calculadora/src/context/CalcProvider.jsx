import * as math from "mathjs";
import {  useState } from "react";
import { CalcContext } from "./CalcContext";



export const Calcprovider = ({children}) => {

    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const addToText = (val) => {
        setText((text) => text + val);
    };

    const calculateResult = (texto) => {
        const operacion = math.evaluate(texto);  //.toFixed(4)

        ( operacion%1 !== 0 ) ? setResult(operacion.toFixed(4)) : setResult(operacion)
    };

    const resetInput = () => {
        setText("");
        setResult("");
    };

return (
    <CalcContext.Provider value={{
        text,
        result,
        addToText,
        calculateResult,
        resetInput,
      }}>
  
        { children }
    </CalcContext.Provider>
);
};