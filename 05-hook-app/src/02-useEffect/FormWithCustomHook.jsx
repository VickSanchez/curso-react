import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     username:"",
    //     email: "",
    //     password:""
    // });

    // const { username, email, password } = formState;

    // const onInputChange = ({ target }) => {
    //     const { name, value }= target;
    //     setFormState({
    //         ...formState,
    //         [ name ]: value
    //     });
       
    // };

    const { formState, onInputChange, username, email, password  } = useForm( {
        username:"",
        email: "",
        password:""
    });

    // const { username, email, password } = useForm;


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
            <h1>Formulario con Custom Hook</h1>
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password" 
                value={ password }
                onChange={ onInputChange }

            />


            {
                (username === "Vick2") && <Message />
            }

        </>
    )
}