import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHeroe } from "./store/slices/marvel";


export const MarvelApp = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch( getHeroe() );
    }, [])
    

return (
<>
    <h1>MarvelApp</h1>
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