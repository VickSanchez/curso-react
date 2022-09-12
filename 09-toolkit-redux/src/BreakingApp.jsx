import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacter } from "./store/slices/breaking";


export const BreakingApp = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch( getCharacter() );
    }, [])
    

return (
<>
    <h1>BreakingBad App</h1>
    <hr />

    <ul>
        <li>Hola Mundo</li>
        <li>Hola Mundo</li>
        <li>Hola Mundo</li>
        <li>Hola Mundo</li>
    </ul>

</>
);
};