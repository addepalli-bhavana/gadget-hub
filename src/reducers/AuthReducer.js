const AuthReducer = (state, action) => {
  if (action.type === "LOGIN_USER") {
    return {
      ...state,
      token: action.payload.token,
      email: action.payload.email,
      isLoggedIn: true,
    };
  }

  if (action.type === "LOGOUT_USER") {
    return { ...state, email: null, token: null, isLoggedIn: false };
  }
};
export default AuthReducer; 
