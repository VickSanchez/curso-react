import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext ); // de Aqui se extrae el login del contexto

  const navigate = useNavigate(); // Aqui se establece el useNavigate para navegar a otra ruta llamando la función
  
  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    login('Vick Sanchez'); 

    navigate( lastPath, {
      replace: true
    }); 
    


  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary green"
              onClick={ onLogin }
      >
        Login
      </button>
    </div>
  );
}
