import { createContext } from "react";
// import Cookies from "js-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const isAuthenticated = () => {
        return !!true;
     }
    const authStates = {
        isAuthenticated,
    } 
  return (
    <AuthContext.Provider value={authStates}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext