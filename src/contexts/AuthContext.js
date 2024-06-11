import React, { useReducer } from "react";
import reducer from "../reducers/AuthReducer";

const AuthContext = React.createContext(); 

const initialState = { 
  email: localStorage.getItem("email"),
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("email"),
}; 

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = (token, email) => {
    dispatch({ type: "LOGIN_USER", payload: { token, email } });
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
  };

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
