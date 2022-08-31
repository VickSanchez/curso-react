import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );
  // console.log( user ) 

    return (
      <>
          <h1>LoginPage</h1>
          <hr />

          <pre aria-label="pre">
            {JSON.stringify( user, null, 3 )}
          </pre>

          <button 
          aria-label='boton'
          className="btn btn-primary"
          onClick={ () => setUser({ id: 123, name: 'Vick', email:'vick@mail.com'})}
          >
            Establecer Usuario
          </button>
      </>
    );
  };
  