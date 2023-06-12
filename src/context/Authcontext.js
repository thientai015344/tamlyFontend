import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};


export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  
  console.log(state.user)
  const user = state.user;

  if(user !== null){
    sessionStorage.setItem('Id', user.user.id);
    sessionStorage.setItem('role', user.user.role);

  }


  return (
    <AuthContext.Provider
      value={{
        user: state.user === null ? state.user : state.user.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
