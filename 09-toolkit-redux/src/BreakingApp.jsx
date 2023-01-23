import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "./store/slices/breaking";


export const BreakingApp = () => {

    const dispatch = useDispatch();
    const { isLoading, characters, page } = useSelector(  (state) => state.breaking )
    
    
    useEffect(() => {
      dispatch( getCharacter() );
      console.log(isLoading);
    }, [])
    

return (
<>
    <h1>BreakingBad App</h1>
    <hr />
    <span>Loading: { isLoading ? "True" : "False" } </span>

    <ul>

        {characters.map(({name}) => {

            return <li key={name}>{name}</li>
        })}
   
    </ul>

    <button
    disabled={ isLoading ? true : false }
    onClick={ () => dispatch( getCharacter( page ))}
    >
        Next
    </button>

</>
);
};