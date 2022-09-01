import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState ={
    logged: false,
}
/* const init = () => {
    name: 'dav',
} */

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState )

    const login = ( name = '') => {
      dispatch( {
          types: types.login,
          payload: {
            id: '123',
            name: name
          } }
      );
    }

    
  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
    }}>

      { children }
    </AuthContext.Provider>
  );
}
