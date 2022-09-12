import React from "react";
import { teclas } from "../helper/teclasData";
import { Button } from "./Button";

export const TecladoApp = () => {
    

  return (
    <>
      {teclas.map((tecla, i) => (
        
          setTimeout(() => {(
            <Button key={i} symbol={tecla.symbol} symbolSec={tecla.symbolSec} handleClick={tecla.handleClick} nombreClase={tecla.nombreClase}
            />)
            
          }, 100)
        
      ))}
    </>
  );
};
