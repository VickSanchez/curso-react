import React, { useContext, memo, useCallback } from "react";
import { CalcContext } from "../context/CalcContext";
import "./styles/Button.css";

export const Button = React.memo(
  ({ symbol, color, handleClick, symbolSec, nombreClase }) => {
    const { addToText, resetInput, calculateResult, text } =
      useContext(CalcContext);

    const onClick = () => {
      handleClick === "calculateResult"
        ? calculateResult(text)
        : handleClick === "resetInput"
        ? resetInput()
        : addToText(symbol);
    };

    return (
      <div
        onClick={onClick}
        className={
          !!nombreClase ? `button-wrapper ${nombreClase}` : "button-wrapper"
        }
        style={{ backgroundColor: color }}
      >
        {!!symbolSec ? symbolSec : symbol}
      </div>
    );
  }
);
