import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:"Vick",
        email: "vick@email.com"
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value }= target;
        setFormState({
            ...formState,
            [ name ]: value
        });
       
    };

    useEffect(() => {
    //   console.log('se llamo el useEffect')
    }, []);
    
    useEffect(() => {
        // console.log('el formState cambió')
      }, [formState]);

    useEffect(() => {
        // console.log('el email cambió')
      }, [ email ]);

    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username" 
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="ejemplo@mail.com"
                name="email" 
                value={ email }
                onChange={ onInputChange }

            />


            {
                (username === "Vick2") && <Message />
            }

        </>
    )
}
